import React from 'react';
import {AuthStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BankAccountDetailsScreen,
  EmergencyDetailsScreen,
  LoginScreen,
  OtpScreen,
  PersonalInformationScreen,
  RegistrationCompleteScreen,
  VehicleDetailsScreen,
} from '../routes';
import {StyleSheet, View} from 'react-native';
import {colors} from '../constants';

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
      <AuthStack.Screen
        name="RegistrationComplete"
        component={RegistrationCompleteScreen}
        options={{
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Registration Complete',
          headerBackground: () => (
            <View style={styles.headerContainer}>
              <View style={styles.curvedBackground} />
            </View>
          ),
        }}
      />
      <AuthStack.Screen
        name="PersonalInformation"
        component={PersonalInformationScreen}
        options={() => ({
          headerShown: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Personal Information',
        })}
      />
      <AuthStack.Screen
        name="VehicleDetails"
        component={VehicleDetailsScreen}
        options={() => ({
          headerShown: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Vehicle Details',
        })}
      />

      <AuthStack.Screen
        name="BankAccountDetails"
        component={BankAccountDetailsScreen}
        options={() => ({
          headerShown: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Vehicle Details',
        })}
      />
      <AuthStack.Screen
        name="EmergencyDetails"
        component={EmergencyDetailsScreen}
        options={() => ({
          headerShown: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Vehicle Details',
        })}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  curvedBackground: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
