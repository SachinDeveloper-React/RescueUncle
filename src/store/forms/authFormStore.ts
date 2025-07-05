// store/authFormStore.ts
import {create} from 'zustand';

const OTP_LENGTH = 6;

type AuthFormState = {
  country_code: string;
  user_mobile: string;
  mobile_otp: string[];
  loading: {
    login: boolean;
    otp: boolean;
  };
  error: {
    login: string | null;
    otp: string | null;
  };
  setField: (key: 'country_code' | 'user_mobile', value: string) => void;
  setOtpDigit: (index: number, value: string) => void;
  setLoading: (type: 'login' | 'otp', value: boolean) => void;
  setError: (type: 'login' | 'otp', value: string | null) => void;
  resetOtp: () => void;
};

export const useAuthFormStore = create<AuthFormState>(set => ({
  country_code: '91',
  user_mobile: '',
  mobile_otp: Array(OTP_LENGTH).fill(''),
  loading: {
    login: false,
    otp: false,
  },
  error: {
    login: null,
    otp: null,
  },

  setField: (key, value) => set(state => ({...state, [key]: value})),
  setOtpDigit: (index, value) =>
    set(state => {
      const updatedOtp = [...state.mobile_otp];
      updatedOtp[index] = value;
      return {mobile_otp: updatedOtp};
    }),
  setLoading: (type, value) =>
    set(state => ({
      loading: {...state.loading, [type]: value},
    })),
  setError: (type, value) =>
    set(state => ({
      error: {...state.error, [type]: value},
    })),
  resetOtp: () => set({mobile_otp: Array(OTP_LENGTH).fill('')}),
}));
