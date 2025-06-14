import React from 'react';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import {
  DeviceExteriorScreen,
  DeviceSidesScreen,
  OrderDetailScreen,
  PackingVerificationScreen,
} from '../routes';
import {colors} from '../constants';
import {StyleSheet, View} from 'react-native';
import {
  OtpVerificationScreen,
  PickupConfirmationScreen,
} from '../routes/Others';

type Props = {};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = (props: Props) => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen
        name="OrderDetail"
        options={() => ({
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Order Details',
          headerBackground: () => (
            <View style={styles.headerContainer}>
              <View style={styles.curvedBackground} />
            </View>
          ),
        })}
        component={OrderDetailScreen}
      />
      <RootStack.Screen
        name="DeviceExterior"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerShadowVisible: false,
          headerTintColor: '#2B2E35',
        })}
        component={DeviceExteriorScreen}
      />
      <RootStack.Screen
        name="DeviceSides"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerShadowVisible: false,
          headerTintColor: '#2B2E35',
        })}
        component={DeviceSidesScreen}
      />
      <RootStack.Screen
        name="PackingVerification"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerShadowVisible: false,
          headerTintColor: '#2B2E35',
        })}
        component={PackingVerificationScreen}
      />
      <RootStack.Screen
        name="OtpVerification"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerShadowVisible: false,
          headerTintColor: '#2B2E35',
        })}
        component={OtpVerificationScreen}
      />
      <RootStack.Screen
        name="PickupConfirmation"
        options={() => ({
          headerShown: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerShadowVisible: false,
          headerTintColor: '#2B2E35',
        })}
        component={PickupConfirmationScreen}
      />
    </RootStack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: colors.inputBackground,
  },
  curvedBackground: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
