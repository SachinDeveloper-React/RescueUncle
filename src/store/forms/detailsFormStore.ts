import {create} from 'zustand';

type PersonalDetails = {
  full_name: string;
  gender: string;
  emergency_name_1: string;
  emergency_contact_1: string;
  emergency_name_2: string;
  emergency_contact_2: string;
  blood_group: string;
  date_of_birth?: string;
  address?: string;
  state?: string;
  country?: string;
  pincode?: string;
  identification_number?: string;
  identification_type?: string;
};

type VehicleDetails = {
  vehicle_registration_number: string;
  Chassis_number: string;
  engine_number: string;
  owner_name: string;
  vehicle_name: string;
  approved?: boolean;
  is_active?: boolean;
};

type BankDetails = {
  bank_name: string;
  account_number: string;
  ifsc_code: string;
  account_holder_name: string;
  is_active: boolean;
};

type DetailsStore = {
  personalDetails: PersonalDetails;
  vehicleDetails: VehicleDetails;
  bankDetails: BankDetails;

  updatePersonalDetails: (data: Partial<PersonalDetails>) => void;
  updateVehicleDetails: (data: Partial<VehicleDetails>) => void;
  updateBankDetails: (data: Partial<BankDetails>) => void;

  resetAll: () => void;
};

const initialPersonalDetails: PersonalDetails = {
  full_name: '',
  gender: '',
  emergency_name_1: '',
  emergency_contact_1: '',
  emergency_name_2: '',
  emergency_contact_2: '',
  blood_group: '',
  date_of_birth: '',
  address: '',
  state: '',
  country: '',
  pincode: '',
  identification_number: '',
  identification_type: '',
};

const initialVehicleDetails: VehicleDetails = {
  vehicle_registration_number: '',
  Chassis_number: '',
  engine_number: '',
  owner_name: '',
  vehicle_name: '',
};

const initialBankDetails: BankDetails = {
  bank_name: '',
  account_number: '',
  ifsc_code: '',
  account_holder_name: '',
  is_active: false,
};

export const useDetailsFormStore = create<DetailsStore>(set => ({
  personalDetails: initialPersonalDetails,
  vehicleDetails: initialVehicleDetails,
  bankDetails: initialBankDetails,

  updatePersonalDetails: data =>
    set(state => ({
      personalDetails: {...state.personalDetails, ...data},
    })),

  updateVehicleDetails: data =>
    set(state => ({
      vehicleDetails: {...state.vehicleDetails, ...data},
    })),

  updateBankDetails: data =>
    set(state => ({
      bankDetails: {...state.bankDetails, ...data},
    })),

  resetAll: () =>
    set({
      personalDetails: initialPersonalDetails,
      vehicleDetails: initialVehicleDetails,
      bankDetails: initialBankDetails,
    }),
}));
