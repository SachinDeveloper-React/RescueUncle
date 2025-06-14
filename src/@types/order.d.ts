export interface Order {
  pickupCenter: string;
  orderNumber: string;
  mealType: string;
  deliveryTime: string;
  status: OrderStatus;
  customer: CustomerInfo;
  pickupAddress: AddressInfo;
  deliveryAddress: AddressInfo;
  deliveryPickup: DeliveryPickupInfo;
  updateStatus: UpdateStatus;
}

export interface OrderStatus {
  label: string;
  color: string;
  code: string;
}

export interface CustomerInfo {
  name: string;
  callEnabled: boolean;
}

export interface AddressInfo {
  title: string;
  address: string;
  callEnabled: boolean;
  navigateEnabled: boolean;
}

export interface DeliveryPickupInfo {
  label: string;
  dueTime: string;
  timeLeft: string;
}

export interface UpdateStatus {
  label: string;
  options: string[];
}
