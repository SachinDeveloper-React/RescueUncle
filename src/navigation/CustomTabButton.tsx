import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabParamList} from './types';
import {AccountScreen, OrdersScreen} from '../routes';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomTabButton = ({
  children,
  onPress,
  accessibilityState,
}: any) => {
  const {bottom} = useSafeAreaInsets();
  //   const focused = accessibilityState.selected ?? 'true';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        // backgroundColor: 'red',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom: bottom,
      }}>
      <Text>csbnnm</Text>
    </TouchableOpacity>
  );
};
