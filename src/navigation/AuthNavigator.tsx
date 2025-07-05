import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {LoginScreen, OtpScreen} from '../routes';

type Props = {};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigator = (props: Props) => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen
        name="Otp"
        component={OtpScreen}
        options={() => ({
          headerShown: true,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
