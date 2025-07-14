import {useState} from 'react';
import {Alert} from 'react-native';
import {
  getBankDetails,
  getProfileDetails,
  getVehicleDetails,
  profileValidation,
  updateBankDetailsByApi,
  updateProfileDetailsByApi,
  updateVehicleDetailsByApi,
} from '../services';
import {useDetailsFormStore} from '../store';
import {goBack} from '../navigation';

type ProfileData = {
  full_name: string;
  gender: string;
  emergency_name_1: string;
  emergency_contact_1: string;
  emergency_name_2: string;
  emergency_contact_2: string;
  blood_group: string;
};

type FormState = {
  profile: {loading: boolean; error: string | null};
  profileUpdate: {loading: boolean; error: string | null};
  vehicle: {loading: boolean; error: string | null};
  vehicleUpdate: {loading: boolean; error: string | null};
  bank: {loading: boolean; error: string | null};
  bankUpdate: {loading: boolean; error: string | null};
};

const initialState: FormState = {
  profile: {loading: false, error: null},
  profileUpdate: {loading: false, error: null},
  vehicle: {loading: false, error: null},
  vehicleUpdate: {loading: false, error: null},
  bank: {loading: false, error: null},
  bankUpdate: {loading: false, error: null},
};

const useDetailsForm = () => {
  const {
    updatePersonalDetails,
    updateVehicleDetails,
    updateBankDetails,
    bankDetails,
    personalDetails,
    vehicleDetails,
  } = useDetailsFormStore();

  const [state, setState] = useState<FormState>(initialState);
  const [getAllLoading, setGetAllLoading] = useState<boolean>(false);

  const setLoading = (key: keyof FormState, loading: boolean) => {
    setState(prev => ({
      ...prev,
      [key]: {...prev[key], loading},
    }));
  };

  const setError = (key: keyof FormState, error: string | null) => {
    setState(prev => ({
      ...prev,
      [key]: {...prev[key], error},
    }));
  };

  const fetchProfileDetails = async () => {
    try {
      setLoading('profile', true);
      setError('profile', null);

      const result = await getProfileDetails();
      const data = result?.data?.data?.[0];

      if (data && typeof data === 'object') {
        updatePersonalDetails({
          ...data,
          emergency_contact_1: data.emergency_contact_1?.toString?.() || '',
          emergency_contact_2: data.emergency_contact_2?.toString?.() || '',
          user_mobile: data.user_mobile.toString?.() || '',
        });
      } else {
        throw new Error('Invalid profile data received');
      }
    } catch (err: any) {
      console.error('Error fetching profile details:', err);
      setError('profile', err?.message || 'Failed to fetch profile details');
    } finally {
      setLoading('profile', false);
    }
  };

  const updateProfileDetail = async (data: ProfileData) => {
    try {
      setLoading('profileUpdate', true);
      setError('profileUpdate', null);

      const response = await updateProfileDetailsByApi({
        full_name: data?.full_name,
        gender: data?.gender,
        emergency_name_1: data?.emergency_name_1,
        emergency_contact_1: data?.emergency_contact_1,
        emergency_name_2: data?.emergency_name_2,
        emergency_contact_2: data?.emergency_contact_2,
        blood_group: data?.blood_group,
      });

      if (response.status === 200) {
        updatePersonalDetails(response.data);
        await fetchProfileDetails();
        goBack();
      } else {
        throw new Error(
          response?.data?.message ||
            response?.data ||
            'Failed to update profile',
        );
      }
    } catch (err: any) {
      console.error('Error updating profile:', err);
      setError('profileUpdate', err?.message || 'Failed to update profile');
      Alert.alert('Error', err?.message || 'Something went wrong');
    } finally {
      setLoading('profileUpdate', false);
    }
  };

  // Vehicle Details

  const fetchVehicleDetails = async () => {
    try {
      setLoading('vehicle', true);
      setError('vehicle', null);
      const result = await getVehicleDetails();

      const data = result?.data?.data?.[0];

      if (data && typeof data === 'object') {
        updateVehicleDetails(data);
      } else {
        throw new Error('Invalid profile data received');
      }
    } catch (err: any) {
      console.error('Error fetching profile details:', err);
      setError('vehicle', err?.message || 'Failed to fetch vehicle details');
    } finally {
      setLoading('vehicle', false);
    }
  };

  const updateVehicleDetail = async (data: {
    vehicle_registration_number: string;
    Chassis_number: string;
    engine_number: string;
    owner_name: string;
    vehicle_name: string;
  }) => {
    setLoading('vehicleUpdate', true);
    setError('vehicleUpdate', null);
    try {
      const response = await updateVehicleDetailsByApi(data);

      if (response.status === 200) {
        await fetchVehicleDetails();
        goBack();
      } else {
        throw new Error(response?.data || 'Failed to update vehicle');
      }
    } catch (err: any) {
      console.error('Vehicle Update Error:', err);
      setError('vehicleUpdate', err?.message || 'Failed to update vehicle');
      Alert.alert('Error', err?.message || 'Failed to update vehicle');
    } finally {
      setLoading('vehicleUpdate', false);
    }
  };

  // === Bank ===
  const fetchBankDetails = async () => {
    setLoading('bank', true);
    setError('bank', null);
    try {
      const result = await getBankDetails();
      const data = result?.data?.data?.[0];

      if (data && typeof data === 'object') {
        updateBankDetails(data);
      } else {
        throw new Error('Invalid bank data received');
      }
    } catch (err: any) {
      console.error('Bank Fetch Error:', err);
      setError('bank', err?.message || 'Failed to fetch bank details');
    } finally {
      setLoading('bank', false);
    }
  };

  const updateBankDetail = async (data: {
    bank_name: string;
    account_number: string;
    ifsc_code: string;
    account_holder_name: string;
    is_active: boolean;
  }) => {
    setLoading('bankUpdate', true);
    setError('bankUpdate', null);
    try {
      const response = await updateBankDetailsByApi(data);

      if (response.status === 201) {
        await fetchBankDetails();
        goBack();
      } else {
        throw new Error(response?.data?.message || 'Failed to update bank');
      }
    } catch (err: any) {
      console.error('Bank Update Error:', err);
      setError('bankUpdate', err?.message || 'Failed to update bank');
      Alert.alert('Error', err?.message || 'Failed to update bank');
    } finally {
      setLoading('bankUpdate', false);
    }
  };

  const getProfileValidation = async () => {
    try {
      setGetAllLoading(true);
      const result = await profileValidation();
      if (
        result.status === 200 &&
        result.data?.account_status &&
        typeof result.data?.account_status === 'object'
      ) {
        updatePersonalDetails({
          ...result.data.account_status?.profile_data,
          emergency_contact_1:
            result.data.account_status?.profile_data.emergency_contact_1?.toString?.() ||
            '',
          emergency_contact_2:
            result.data.account_status?.profile_data.emergency_contact_2?.toString?.() ||
            '',
        });
        updateVehicleDetails(result.data.account_status?.vehicle_data);
        updateBankDetails(result.data.account_status?.bank_account_data);
      } else {
        throw new Error('Invalid Data received');
      }
    } catch (err: any) {
      setError('profile', err?.message || 'Failed to fetch profile details');
      setError('vehicle', err?.message || 'Failed to fetch vehicle details');
      setError('bank', err?.message || 'Failed to fetch bank details');
    } finally {
      setGetAllLoading(false);
    }
  };

  return {
    state,
    getAllLoading,
    bankDetails,
    personalDetails,
    vehicleDetails,

    fetchProfileDetails,
    updateProfileDetail,

    fetchVehicleDetails,
    updateVehicleDetail,

    fetchBankDetails,
    updateBankDetail,

    getProfileValidation,
  };
};

export default useDetailsForm;
