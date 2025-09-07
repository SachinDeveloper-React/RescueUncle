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
  EditBankDetailScreen,
  EditProfileScreen,
  EditVehicleDetailScreen,
  FaqScreen,
  OrderDetailScreen,
  OrderHistoryScreen,
  OtpVerificationScreen,
  PackingVerificationScreen,
  PickupConfirmationScreen,
  PreviewAllMediaScreen,
  PrivacyAndPolicyScreen,
  ReferAndEarnScreen,
  SupportScreen,
  TermsAndConditionScreen,
  TransactionScreen,
  WarehouseScreen,
} from '../routes';
import {colors} from '../constants';
import {StyleSheet, View} from 'react-native';
import {useAuthStore} from '../store';
import ProfileNavigator from './ProfileNavigator';

type Props = {};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = (props: Props) => {
  const {isAuthenticated, isProfileCompleted} = useAuthStore();

  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      {!isAuthenticated ? (
        <>
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        </>
      ) : (
        <>
          {!isProfileCompleted ? (
            <RootStack.Screen name="Profile" component={ProfileNavigator} />
          ) : (
            <>
              <RootStack.Screen name="Main" component={TabNavigator} />
              <RootStack.Group>
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
                  name="EditVehicleDetail"
                  options={() => ({
                    headerShown: false,
                    headerBackButtonDisplayMode: 'minimal',
                    headerTitle: 'Edit Vehicle Details',
                    headerShadowVisible: false,
                    headerTintColor: colors.textPrimary,
                  })}
                  component={EditVehicleDetailScreen}
                />
                <RootStack.Screen
                  name="EditBankDetail"
                  options={() => ({
                    headerShown: false,
                    headerBackButtonDisplayMode: 'minimal',
                    headerTitle: 'Edit Bank Details',
                    headerShadowVisible: false,
                    headerTintColor: colors.textPrimary,
                  })}
                  component={EditBankDetailScreen}
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
                <RootStack.Screen
                  name="PreviewAllMedia"
                  options={() => ({
                    headerShown: true,
                    headerBackButtonDisplayMode: 'minimal',
                    headerTitle: 'Preview',
                    headerShadowVisible: true,
                    headerTintColor: colors.textPrimary,
                  })}
                  component={PreviewAllMediaScreen}
                />
                <RootStack.Screen
                  name="WarehouseScreen"
                  options={() => ({
                    headerShown: true,
                    headerBackButtonDisplayMode: 'minimal',
                    headerTitle: 'Warehouse',
                    headerShadowVisible: true,
                    headerTintColor: colors.textPrimary,
                  })}
                  component={WarehouseScreen}
                />
              </RootStack.Group>
            </>
          )}
        </>
      )}
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
