import {useState, useRef} from 'react';
import {OrderApi} from '../networking';
import {DateType} from 'react-native-ui-datepicker';
import {useOrderStore} from '../store';

type TabType = 'VF' | 'Customer' | 'SC';

const useOrderService = () => {
  const loadedTabs = useRef<Set<string>>(new Set());
  const {Customer, SC, VF, setCustomer, setSC, setWH} = useOrderStore();

  const tabs: TabType[] = ['VF', 'Customer', 'SC'];
  const [selectedTab, setSelectedTab] = useState<TabType>('Customer');

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
  const [refreshLoadingState, setRefreshLoadingState] = useState<{
    VF: boolean;
    Customer: boolean;
    SC: boolean;
  }>({
    Customer: false,
    SC: false,
    VF: false,
  });

  const setLoadingState = (
    tab: TabType,
    loading: boolean,
    error: string | null = null,
  ) => {
    const setterMap = {
      VF: setWH,
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
          : tab === 'VF'
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
        VF: setWH,
        Customer: setCustomer,
        SC: setSC,
      };

      if (response.code == 200) {
        setterMap[tab]({
          pagination: response.data,
          loading: false,
          error: null,
        });
      } else {
        setLoadingState(
          tab,
          false,
          response.data.message || 'Failed to fetch data',
        );
      }
    } catch (error: any) {
      console.log('error', error);
      setLoadingState(tab, false, error.message || 'Failed to fetch data');
    } finally {
      if (forceRefresh) {
        setRefreshLoadingState(prev => ({...prev, [tab]: false}));
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
    VF,
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
