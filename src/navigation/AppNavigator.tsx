import React from 'react';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import {
  AskForLeaveScreen,
  DeviceExteriorScreen,
  DeviceSidesScreen,
  EarningsScreen,
  EditProfileScreen,
  FaqScreen,
  OrderDetailScreen,
  OrderHistoryScreen,
  OtpVerificationScreen,
  PackingVerificationScreen,
  PickupConfirmationScreen,
  PrivacyAndPolicyScreen,
  ReferAndEarnScreen,
  SupportScreen,
  TermsAndConditionScreen,
  TransactionScreen,
} from '../routes';
import {colors} from '../constants';
import {StyleSheet, Text, View} from 'react-native';

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
          headerTintColor: colors.textPrimary,
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
          headerTintColor: colors.textPrimary,
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
          headerTintColor: colors.textPrimary,
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
          headerTintColor: colors.textPrimary,
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
          headerTintColor: colors.textPrimary,
        })}
        component={PickupConfirmationScreen}
      />
      <RootStack.Screen
        name="EditProfile"
        options={() => ({
          headerShown: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
          headerShadowVisible: false,
          headerTintColor: colors.textPrimary,
        })}
        component={EditProfileScreen}
      />
      <RootStack.Screen
        name="ReferAndEarn"
        options={() => ({
          headerBackground: () => (
            <View
              style={[
                styles.headerContainer,
                {
                  backgroundColor: colors.primary,
                },
              ]}>
              <View style={styles.curvedBackground} />
            </View>
          ),
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Refer & Earn',
          headerShadowVisible: false,
          headerTintColor: colors.textPrimary,
        })}
        component={ReferAndEarnScreen}
      />

      <RootStack.Screen
        name="Support"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Support',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={SupportScreen}
      />
      <RootStack.Screen
        name="Faq"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'FAQ',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={FaqScreen}
      />
      <RootStack.Screen
        name="TermsAndCondition"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Terms And Condition',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={TermsAndConditionScreen}
      />

      <RootStack.Screen
        name="PrivacyAndPolicy"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Privacy & Policy',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={PrivacyAndPolicyScreen}
      />
      <RootStack.Screen
        name="AskForLeave"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Ask For Leave',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={AskForLeaveScreen}
      />
      <RootStack.Screen
        name="Transaction"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Transactions History',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={TransactionScreen}
      />
      <RootStack.Screen
        name="OrderHistory"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Order History',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={OrderHistoryScreen}
      />
      <RootStack.Screen
        name="Earnings"
        options={() => ({
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: 'Earnings',
          headerShadowVisible: true,
          headerTintColor: colors.textPrimary,
        })}
        component={EarningsScreen}
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
