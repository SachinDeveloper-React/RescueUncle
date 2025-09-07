import {errorHandler, responseHandler} from '../../utils';
import {ServiceApi} from '../ApiClient';
import {URLS} from '../endpoints';

const OrderApi = {
  getOrderService: async (params: {
    pickup_customer?: string;
    drop_service_center?: string;
    pickup_service_center?: string;
    verification?: string;
    drop_customer?: string;
    service_date?: string;
    history?: string;
    service_center_device_dropped_warehouse?: string;
    customer_pick_drop_warehouse?: string;
  }) => {
    try {
      const response = await ServiceApi.get(URLS.SERVICES.GETSERVICES, {
        params: params,
      });

      return responseHandler(response);
    } catch (error) {
      console.log('Order Api get service error', error);
      return errorHandler(error);
    }
  },
  getOrderServiceDetailById: async (params: {
    pickup_customer?: string;
    drop_service_center?: string;
    pickup_service_center?: string;
    verification?: string;
    drop_customer?: string;
    service_date?: string;
    history?: string;
    service_id?: string;
  }) => {
    try {
      const response = await ServiceApi.get(URLS.SERVICES.GETSERVICES, {
        params: params,
      });

      return responseHandler(response);
    } catch (error) {
      console.log('Order Api get service error', error);
      return errorHandler(error);
    }
  },
};

export default OrderApi;
