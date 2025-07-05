import {errorHandler, responseHandler} from '../../utils';
import {AccountsApi} from '../ApiClient';
import {URLS} from '../endpoints';

const ProfileApi = {
  getProfile: async () => {
    try {
      const response = await AccountsApi.get(URLS.PROFILE.GETPROFILEDETAILS);
      return responseHandler(response);
    } catch (error) {
      console.log('get profile error', error);
      return errorHandler(error);
    }
  },

  updateProfile: async (body: {
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
    try {
      const response = await AccountsApi.put(
        URLS.PROFILE.UPDATEPROFILEDETAILS,
        body,
      );

      return responseHandler(response);
    } catch (error) {
      console.log('update profile error', error);
      return errorHandler(error);
    }
  },

  getVehicleDetails: async () => {
    try {
      const response = await AccountsApi.get(URLS.PROFILE.GETVEHICLEDETAILS);
      return responseHandler(response);
    } catch (error) {
      console.log('get profile error', error);
      return errorHandler(error);
    }
  },

  updateVehicle: async (body: {
    vehicle_registration_number: string;
    Chassis_number: string;
    engine_number: string;
    owner_name: string;
    vehicle_name: string;
  }) => {
    try {
      console.log('body', body);
      const response = await AccountsApi.post(
        URLS.PROFILE.UPDATEVEHICLEDETAILS,
        body,
      );

      console.log('response', response);
      return responseHandler(response);
    } catch (error) {
      console.log('update vehicle error', error);
      return errorHandler(error);
    }
  },

  getBankDetails: async () => {
    try {
      const response = await AccountsApi.get(
        URLS.PROFILE.GETBANKDETAILSDETAILS,
      );
      return responseHandler(response);
    } catch (error) {
      console.log('get bank error', error);
      return errorHandler(error);
    }
  },

  updateBank: async (body: {
    bank_name: string;
    account_number: string;
    ifsc_code: string;
    account_holder_name: string;
    is_active: boolean;
  }) => {
    try {
      console.log('body', body);
      const response = await AccountsApi.post(
        URLS.PROFILE.UPDATEBANKDETAILS,
        body,
      );

      console.log('response', response);
      return responseHandler(response);
    } catch (error) {
      console.log('update vehicle error', error);
      return errorHandler(error);
    }
  },
};

export default ProfileApi;
