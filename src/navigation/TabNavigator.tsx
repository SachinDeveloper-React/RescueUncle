import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './types';
import {AccountScreen, OrdersScreen} from '../routes';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AccountIcon, OrderIcon} from '../assets';
import {useResponsiveScale} from '../hooks';
import {colors} from '../constants';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const SCREEN_WIDTH = Dimensions.get('window').width;
const TAB_WIDTH = SCREEN_WIDTH / 2.6;

const CustomTabLabel = ({
  focused,
  label,
  IconComponent,
}: {
  focused: boolean;
  label: string;
  IconComponent: React.FC<{focused: boolean}>;
}) => {
  const {scale, scaleFont} = useResponsiveScale();

  return (
    <View
      style={{
        width: TAB_WIDTH,
        backgroundColor: focused ? 'red' : 'transparent',
        paddingVertical: scale(6),
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(6),
        borderRadius: scale(6),
        overflow: 'hidden',
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <IconComponent focused={focused} />
      <Text
        style={{
          color: focused ? '#fff' : '#000',
          fontSize: scaleFont(16),
          fontWeight: '600',
        }}>
        {label}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  const {scale, scaleFont} = useResponsiveScale();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: '#0a3a5f',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelPosition: 'beside-icon',
        headerTitleAlign: 'center',
        headerTitleAllowFontScaling: true,
        tabBarStyle: {
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          // headerTitle: 'Orders',
          tabBarLabel: ({focused}) => (
            <CustomTabLabel
              focused={focused}
              label="Orders"
              IconComponent={OrderIcon}
            />
          ),
          headerBackground: () => (
            <View style={styles.headerContainer}>
              <View style={styles.curvedBackground} />
            </View>
          ),
          headerTitle: ({}) => {
            return (
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <OrderIcon focused={false} />
                <Text style={{fontSize: scaleFont(20), fontWeight: '500'}}>
                  Orders
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          // headerTitle: 'Account',
          tabBarLabel: ({focused}) => (
            <CustomTabLabel
              focused={focused}
              label="Accounts"
              IconComponent={AccountIcon}
            />
          ),
          headerBackground: () => (
            <View style={styles.headerContainer}>
              <View style={styles.curvedBackground} />
            </View>
          ),
          headerTitle: ({}) => {
            return (
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <AccountIcon focused={false} />
                <Text style={{fontSize: scaleFont(20), fontWeight: '500'}}>
                  Account
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

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
