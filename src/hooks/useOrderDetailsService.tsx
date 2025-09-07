import {useOrderDetailsStore} from '../store/orderDetails';
import {OrderApi} from '../networking';
import {useEffect} from 'react';
import {OrderDetailTab} from '../navigation/types';

type Props = {
  tab: OrderDetailTab;
  id: string;
};

const useOrderDetailsService = ({tab, id}: Props) => {
  const {
    setLoading,
    refresh,
    setRefresh,
    setData,
    setError,
    data,
    error,
    loading,
  } = useOrderDetailsStore();
  const fetchOrderDetails = async (refresh?: boolean) => {
    try {
      if (refresh) setRefresh(true);
      else setLoading(true);

      const params =
        tab === 'Customer'
          ? {
              pickup_customer: 'True',
              drop_customer: 'True',
              service_id: id,
            }
          : tab === 'VF'
          ? {
              verification: 'True',
              service_id: id,
            }
          : tab === 'SC'
          ? {
              drop_service_center: 'True',
              pickup_service_center: 'True',
              service_id: id,
            }
          : tab === 'DS'
          ? {
              service_center_device_dropped_warehouse: 'True',
              service_id: id,
            }
          : tab === 'DC'
          ? {
              customer_pick_drop_warehouse: 'True',
              service_id: id,
            }
          : {};

      const response = await OrderApi.getOrderServiceDetailById(params);

      if (response.code === 200) {
        setData(response.data.data);
      } else {
        setError(response.data.message || 'Failed to load order details');
      }
    } catch (error: any) {
      setError(error.message || 'Unexpected error');
    } finally {
      setRefresh(false);
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    await fetchOrderDetails(true);
  };
  useEffect(() => {
    fetchOrderDetails(false);
  }, []);

  return {data, error, loading, refresh, onRefresh};
};

export default useOrderDetailsService;
