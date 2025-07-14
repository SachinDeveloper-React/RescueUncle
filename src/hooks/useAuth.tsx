import {TextInput} from 'react-native';
import {useRef} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../navigation';
import {sendOtp, verifyOtp} from '../services';
import {useAuthFormStore, useAuthStore} from '../store';

type AuthNav = NativeStackNavigationProp<AuthStackParamList, 'Login'>;
const OTP_LENGTH = 6;

const useAuth = () => {
  const navigation = useNavigation<AuthNav>();
  const inputs = useRef<TextInput[]>([]);

  const {
    country_code,
    user_mobile,
    mobile_otp,
    loading,
    error,
    setField,
    setOtpDigit,
    setLoading,
    setError,
    resetOtp,
  } = useAuthFormStore();
  const {login} = useAuthStore();

  // Handlers
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (key: 'country_code' | 'user_mobile', value: string) => {
    setField(key, value);
  };

  const handleOtpChange = (text: string, index: number) => {
    setOtpDigit(index, text);
    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      mobile_otp[index] === '' &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  // API Calls
  const handleSendOtp = async () => {
    setError('login', null);
    setError('otp', null);

    if (!validatePhone(user_mobile)) {
      setError('login', 'Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading('login', true);
    try {
      const res = await sendOtp(user_mobile, country_code);
      if (!res?.error && res?.status === 200) {
        navigation.navigate('Otp', {
          country_code,
          user_mobile,
          mobile_otp: mobile_otp.join(''),
        });
      } else {
        setError('login', res?.msg || 'Something went wrong.');
      }
    } catch (err: any) {
      setError('login', err?.message || 'Unable to send OTP.');
    } finally {
      setLoading('login', false);
    }
  };

  const handleValidateOtp = async () => {
    setError('login', null);
    setError('otp', null);
    setLoading('otp', true);

    try {
      const res = await verifyOtp(
        user_mobile,
        country_code,
        mobile_otp.join(''),
      );

      if (!res?.error && res?.status === 200) {
        await login(
          res.data?.data[0].access_token,
          res.data?.data[0].refresh_token,
          null,
          res.data.profile_status,
        );
      } else {
        setError('otp', res.data || 'Something went wrong.');
      }
    } catch (err: any) {
      setError('otp', err?.message || 'Unable to verify OTP.');
    } finally {
      setLoading('otp', false);
    }
  };

  return {
    auth: {country_code, user_mobile, mobile_otp},
    loading,
    error,
    handleChange,
    handleSendOtp,
    handleOtpChange,
    handleKeyPress,
    inputs,
    handleValidateOtp,
  };
};

export default useAuth;
