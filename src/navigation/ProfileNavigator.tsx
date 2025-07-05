import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  PersonalInformationScreen,
  VehicleDetailsScreen,
  BankAccountDetailsScreen,
  EmergencyDetailsScreen,
  RegistrationCompleteScreen,
} from '../routes';
import {ProfileStackParamList} from './types';
import {StyleSheet, View} from 'react-native';
import {colors} from '../constants';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <ProfileStack.Screen
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
      <ProfileStack.Screen
        name="PersonalInformation"
        component={PersonalInformationScreen}
        options={{headerTitle: 'Personal Information'}}
      />
      <ProfileStack.Screen
        name="VehicleDetails"
        component={VehicleDetailsScreen}
        options={{headerTitle: 'Vehicle Details'}}
      />
      <ProfileStack.Screen
        name="BankAccountDetails"
        component={BankAccountDetailsScreen}
        options={{headerTitle: 'Bank Account Details'}}
      />
      <ProfileStack.Screen
        name="EmergencyDetails"
        component={EmergencyDetailsScreen}
        options={{headerTitle: 'Emergency Contact Details'}}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;

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
