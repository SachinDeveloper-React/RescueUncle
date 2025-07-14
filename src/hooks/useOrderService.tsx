import {useState, useRef} from 'react';
import {OrderApi} from '../networking';
import {DateType} from 'react-native-ui-datepicker';
import {useOrderStore} from '../store';

type TabType = 'WH' | 'Customer' | 'SC';

const useOrderService = () => {
  const loadedTabs = useRef<Set<string>>(new Set());
  const {Customer, SC, WH, setCustomer, setSC, setWH} = useOrderStore();

  const tabs: TabType[] = ['WH', 'Customer', 'SC'];
  const [selectedTab, setSelectedTab] = useState<TabType>('Customer');

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
  const [refreshLoadingState, setRefreshLoadingState] = useState<{
    WH: boolean;
    Customer: boolean;
    SC: boolean;
  }>({
    Customer: false,
    SC: false,
    WH: false,
  });

  const setLoadingState = (
    tab: TabType,
    loading: boolean,
    error: string | null = null,
  ) => {
    const setterMap = {
      WH: setWH,
      Customer: setCustomer,
      SC: setSC,
    };
    setterMap[tab]({loading, error});
  };

  const getOrderData = async (
    tab: TabType = selectedTab,
    forceRefresh = false,
  ) => {
    try {
      if (!forceRefresh && loadedTabs.current.has(tab)) return;

      if (!forceRefresh) loadedTabs.current.add(tab);

      loadedTabs.current.add(tab);
      if (forceRefresh) {
        setRefreshLoadingState(prev => ({...prev, [tab]: true}));
      } else {
        setLoadingState(tab, true);
      }

      const params =
        tab === 'Customer'
          ? {
              pickup_customer: 'True',
              drop_customer: 'True',
            }
          : tab === 'WH'
          ? {
              verification: 'True',
            }
          : tab === 'SC'
          ? {
              drop_service_center: 'True',
              pickup_service_center: 'True',
            }
          : {};
      const response = await OrderApi.getOrderService(params);
      const setterMap = {
        WH: setWH,
        Customer: setCustomer,
        SC: setSC,
      };

      if (response.code == 200) {
        setTimeout(() => {
          setterMap[tab]({
            pagination: response.data,
            loading: false,
            error: null,
          });
        }, 5000);
      } else {
        setTimeout(() => {
          setLoadingState(
            tab,
            false,
            response.data.message || 'Failed to fetch data',
          );
        }, 5000);
      }
    } catch (error: any) {
      console.log('error', error);
      setLoadingState(tab, false, error.message || 'Failed to fetch data');
    } finally {
      if (forceRefresh) {
        setTimeout(() => {
          setRefreshLoadingState(prev => ({...prev, [tab]: false}));
        }, 5000);
      }
    }
  };

  const handlePress = (tab: TabType) => {
    setSelectedTab(tab);
    getOrderData(tab);
  };

  return {
    tabs,
    selectedTab,
    Customer,
    WH,
    SC,
    isDatePickerVisible,
    selectedDate,
    setIsDatePickerVisible,
    setSelectedDate,
    getOrderData,
    handlePress,
    refreshLoadingState,
  };
};

export default useOrderService;
