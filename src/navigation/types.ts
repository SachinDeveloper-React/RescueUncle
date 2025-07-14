import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Otp: {
    country_code: string;
    user_mobile: string;
    mobile_otp: string;
  };
  RegistrationComplete: undefined;
};

export type ProfileStackParamList = {
  PersonalInformation: undefined;
  VehicleDetails: undefined;
  BankAccountDetails: undefined;
  EmergencyDetails: undefined;
  RegistrationComplete: undefined;
};

export type BottomTabParamList = {
  Orders: undefined;
  Account: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<BottomTabParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
  OrderDetail: {
    id: string | number;
    tab: 'WH' | 'Customer' | 'SC';
  };
  DeviceExterior: undefined;
  DeviceSides: undefined;
  PackingVerification: undefined;
  OtpVerification: undefined;
  PickupConfirmation: undefined;
  EditProfile: undefined;
  EditVehicleDetail: undefined;
  EditBankDetail: undefined;
  ReferAndEarn: undefined;
  Support: undefined;
  Faq: undefined;
  TermsAndCondition: undefined;
  PrivacyAndPolicy: undefined;
  AskForLeave: undefined;
  Transaction: undefined;
  OrderHistory: undefined;
  Earnings: undefined;
  PreviewAllMedia: undefined;
};
