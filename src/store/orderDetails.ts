import {create} from 'zustand';
import {OrderDetails} from '../@types/orderDetails';

interface OrderDetailsState {
  data: OrderDetails[];
  loading: boolean;
  refresh: boolean;
  error: string | null;
  setData: (data: OrderDetails[]) => void;
  setLoading: (loading: boolean) => void;
  setRefresh: (refresh: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useOrderDetailsStore = create<OrderDetailsState>(set => ({
  data: [],
  loading: false,
  refresh: false,
  error: null,
  setData: data => set({data, loading: false, error: null}),
  setLoading: loading => set({loading}),
  setRefresh: refresh => set({refresh}),
  setError: error => set({error, loading: false}),
  reset: () => set({data: [], loading: false, error: null}),
}));
