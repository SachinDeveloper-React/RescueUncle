export interface OrderDetailsResponse {
  total_items: number;
  next_page: string | null;
  previous_page: string | null;
  data: OrderDetails[];
  ordering: string[];
  page_size: number;
  has_next: boolean;
  has_previous: boolean;
}

export interface OrderDetails {
  service_id: number;
  customer_details: CustomerDetails;
  service_type: 'on_site' | string;
  coupon_id: number | null;
  device_details: DeviceDetails;
  delivery_pick_customer: any;
  warehouse_details: WarehouseDetails;
  charges: Charges;
  currency: string;
  on_submittion_url: string;
  payment_type: 'prepaid' | 'cod' | string;
  is_service_completed: boolean;
  is_service_cancelled: boolean;
  created_at: string;
  updated_at: string;
}

export interface CustomerDetails {
  country_calling_code: number;
  mobile: number;
  alternative_contact_number: number;
  full_name: string;
  address: Address;
}

export interface Address {
  address_type: string;
  full_address: string;
  address_state: string;
  address_district: string;
  address_pincode: string;
  address_country: string;
}

export interface DeviceDetails {
  ru_device_id: string;
  device_name: string;
  device_id: string;
}

export interface WarehouseDetails {
  warehouse_id: number | null;
  warehouse_name: string | null;
  warehouse_address: string | null;
  warehouse_state: string | null;
  warehouse_district: string | null;
  warehouse_pincode: string | null;
  warehouse_contact_person_name: string | null;
  warehouse_contact_number: string | null;
  loc_latitude: number | null;
  loc_longitude: number | null;
}

export interface Charges {
  discount_amount: number;
  total_service_charges: number;
  final_service_charges: number;
  total_amount: number;
  paid_amount: number;
  pending_payment: number;
  refunded_amount: number;
}
