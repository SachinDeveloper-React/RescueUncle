import {create} from 'zustand';

type PaginationState = {
  total_items: number;
  page_size: number;
  next_page: number | null;
  previous_page: number | null;
  has_next: boolean;
  has_previous: boolean;
  data: any[];
};

type SectionState = {
  loading: boolean;
  refreshLoading: boolean;
  error: string | null;
  pagination: PaginationState;
};

type WarehouseStore = {
  customerDrop: SectionState;
  serviceDrop: SectionState;
  setCustomerDrop: (payload: Partial<SectionState>) => void;
  setServiceDrop: (payload: Partial<SectionState>) => void;
};

const createInitialPagination = (): PaginationState => ({
  total_items: 0,
  page_size: 10,
  next_page: null,
  previous_page: null,
  has_next: false,
  has_previous: false,
  data: [],
});

const createInitialSection = (): SectionState => ({
  loading: false,
  refreshLoading: false,
  error: null,
  pagination: createInitialPagination(),
});

export const useWarehouseStore = create<WarehouseStore>(set => ({
  customerDrop: createInitialSection(),
  serviceDrop: createInitialSection(),

  setCustomerDrop: payload =>
    set(state => ({
      customerDrop: {
        ...state.customerDrop,
        ...payload,
        pagination: {
          ...state.customerDrop.pagination,
          ...payload.pagination,
        },
      },
    })),

  setServiceDrop: payload =>
    set(state => ({
      serviceDrop: {
        ...state.serviceDrop,
        ...payload,
        pagination: {
          ...state.serviceDrop.pagination,
          ...payload.pagination,
        },
      },
    })),
}));
