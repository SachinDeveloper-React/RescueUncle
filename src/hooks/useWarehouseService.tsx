import {useWarehouseStore} from '../store';
import {OrderApi} from '../networking';

type WarehouseParams = {
  service_center_device_dropped_warehouse?: string;
  customer_pick_drop_warehouse?: string;
};

const useWarehouseService = () => {
  const {customerDrop, serviceDrop, setCustomerDrop, setServiceDrop} =
    useWarehouseStore();

  const getWarehouseData = async (
    type: 'customer' | 'service',
    params: WarehouseParams,
    refresh = false,
  ) => {
    try {
      // set loading state
      if (type === 'customer') {
        setCustomerDrop({
          loading: !refresh, // normal loading only when not refreshing
          refreshLoading: refresh, // true when refreshing
          error: null,
        });
      } else {
        setServiceDrop({
          loading: !refresh,
          refreshLoading: refresh,
          error: null,
        });
      }

      const response = await OrderApi.getOrderService(params);

      if (response.code === 200) {
        if (type === 'customer') {
          setCustomerDrop({
            pagination: response.data,
            loading: false,
            refreshLoading: false,
            error: null,
          });
        } else {
          setServiceDrop({
            pagination: response.data,
            loading: false,
            refreshLoading: false,
            error: null,
          });
        }
      } else {
        const errorMsg = response.data?.message || 'Failed to fetch data';
        if (type === 'customer') {
          setCustomerDrop({
            loading: false,
            refreshLoading: false,
            error: errorMsg,
          });
        } else {
          setServiceDrop({
            loading: false,
            refreshLoading: false,
            error: errorMsg,
          });
        }
      }
    } catch (err: any) {
      const errorMsg = err.message || 'Unexpected error';
      if (type === 'customer') {
        setCustomerDrop({
          loading: false,
          refreshLoading: false,
          error: errorMsg,
        });
      } else {
        setServiceDrop({
          loading: false,
          refreshLoading: false,
          error: errorMsg,
        });
      }
    }
  };

  // wrapper for refresh
  const refreshWarehouseData = async (
    type: 'customer' | 'service',
    params: WarehouseParams,
  ) => {
    return getWarehouseData(type, params, true);
  };

  return {
    customerDrop,
    serviceDrop,
    getWarehouseData,
    refreshWarehouseData,
  };
};

export default useWarehouseService;
