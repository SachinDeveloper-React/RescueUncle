type Address = {
  address_type: string;
  full_address: string;
  address_state: string;
  address_district: string;
  address_pincode: string;
  address_country: string;
};

type CustomerDetails = {
  country_calling_code: number;
  mobile: number;
  alternative_contact_number: number;
  full_name: string;
  address: Address;
};

type DeviceDetails = {
  ru_device_id: string;
  device_name: string;
  device_id: string;
};

type PickupDetails = {
  device_pickup_date_time_customer: string | null;
  device_pickup_otp_customer: number;
  customer_pick_photo_1: string | null;
  customer_pick_photo_2: string | null;
  customer_pick_photo_3: string | null;
  customer_pick_photo_4: string | null;
  customer_pick_video_1: string | null;
  customer_pick_video_2: string | null;
  description: string | null;
};

type DeliveryPickCustomer = {
  is_delivery_partner_assigned: boolean;
  delivery_agent_full_name: string;
  delivery_agent_id: string;
  delivery_agent_country_calling_code: number;
  delivery_agent_mobile: number;
  pickup_details: PickupDetails;
  is_device_pickedup_successfully: boolean;
};

type Charges = {
  discount_amount: number;
  total_service_charges: number;
  final_service_charges: number;
  total_amount: number;
  paid_amount: number;
  pending_payment: number;
  refunded_amount: number;
};

export type ServiceData = {
  service_id: number;
  customer_details: CustomerDetails;
  service_type: string;
  coupon_id: number | null;
  device_details: DeviceDetails;
  delivery_pick_customer: DeliveryPickCustomer;
  charges: Charges;
  currency: string;
  payment_type: string;
  is_service_completed: boolean;
  is_service_cancelled: boolean;
  created_at: string;
  updated_at: string;
};

type PaginationState = {
  total_items: number;
  page_size: number;
  next_page: string | null;
  previous_page: string | null;
  has_next: boolean;
  has_previous: boolean;
  data: ServiceData[];
};

type ServiceSectionState = {
  loading: boolean;
  error: string | null;
  pagination: PaginationState;
};

type ServiceStore = {
  WH: ServiceSectionState;
  Customer: ServiceSectionState;
  SC: ServiceSectionState;
  setWH: (payload: Partial<ServiceSectionState>) => void;
  setCustomer: (payload: Partial<ServiceSectionState>) => void;
  setSC: (payload: Partial<ServiceSectionState>) => void;
};
