import {ProfileApi} from '../networking';

export const getProfileDetails = async () => {
  const res = await ProfileApi.getProfile();
  if (res.code !== 200) {
    return {
      status: res.code,
      data: res.data.detail || res.data.message || 'Unexpected error',
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};
export const getVehicleDetails = async () => {
  const res = await ProfileApi.getVehicleDetails();
  if (res.code !== 200) {
    return {
      status: res.code,
      data: res.data.detail || res.data.message || 'Unexpected error',
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};
export const getBankDetails = async () => {
  const res = await ProfileApi.getBankDetails();
  if (res.code !== 200) {
    return {
      status: res.code,
      data: res.data.detail || res.data.message || 'Unexpected error',
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};

export const updateProfileDetailsByApi = async (body: {
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
}) => {
  const res = await ProfileApi.updateProfile(body);
  console.log('update res', res);
  if (res.code !== 200) {
    return {
      status: res.code,
      data: res.data.detail || res.data.message || 'Unexpected error',
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};
export const updateVehicleDetailsByApi = async (body: {
  vehicle_registration_number: string;
  Chassis_number: string;
  engine_number: string;
  owner_name: string;
  vehicle_name: string;
}) => {
  const res = await ProfileApi.updateVehicle(body);

  if (res.code !== 200) {
    return {
      status: res.code,
      data: res.data.detail || res.data.message || 'Unexpected error',
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};
export const updateBankDetailsByApi = async (body: {
  bank_name: string;
  account_number: string;
  ifsc_code: string;
  account_holder_name: string;
  is_active: boolean;
}) => {
  const res = await ProfileApi.updateBank(body);

  if (res.code !== 200) {
    return {
      status: res.code,
      data: res.data.detail || res.data.message || 'Unexpected error',
      error: true,
    };
  } else {
    return {
      status: res.code,
      data: res.data,
      error: false,
    };
  }
};
