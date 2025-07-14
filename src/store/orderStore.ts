import {create} from 'zustand';
import {
  PaginationState,
  ServiceSectionState,
  ServiceStore,
} from '../@types/orderServices';

const createInitialPagination = (): PaginationState => ({
  total_items: 0,
  page_size: 10,
  next_page: null,
  previous_page: null,
  has_next: false,
  has_previous: false,
  data: [],
});

const createInitialSection = (): ServiceSectionState => ({
  loading: false,
  error: null,
  pagination: createInitialPagination(),
});

export const useOrderStore = create<ServiceStore>(set => ({
  WH: createInitialSection(),
  Customer: createInitialSection(),
  SC: createInitialSection(),

  setWH: payload =>
    set(state => ({
      WH: {
        ...state.WH,
        ...payload,
        pagination: {...state.WH.pagination, ...payload.pagination},
      },
    })),

  setCustomer: payload =>
    set(state => ({
      Customer: {
        ...state.Customer,
        ...payload,
        pagination: {...state.Customer.pagination, ...payload.pagination},
      },
    })),

  setSC: payload =>
    set(state => ({
      SC: {
        ...state.SC,
        ...payload,
        pagination: {...state.SC.pagination, ...payload.pagination},
      },
    })),
}));
