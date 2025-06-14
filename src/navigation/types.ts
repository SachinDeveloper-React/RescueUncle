import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Otp: undefined;
  RegistrationComplete: undefined;
  PersonalInformation: undefined;
  VehicleDetails: undefined;
  BankAccountDetails: undefined;
  EmergencyDetails: undefined;
};

export type BottomTabParamList = {
  Orders: undefined;
  Account: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<BottomTabParamList>;
  OrderDetail: undefined;
  DeviceExterior: undefined;
  DeviceSides: undefined;
  PackingVerification: undefined;
  OtpVerification: undefined;
  PickupConfirmation: undefined;
};
