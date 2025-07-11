import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  focused: boolean;
};

const OrderIcon = ({focused}: Props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 8L8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7L16 8"
        stroke={focused ? 'white' : colors.textPrimary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M15 14V12"
        stroke={focused ? 'white' : colors.textPrimary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M9 14V12"
        stroke={focused ? 'white' : colors.textPrimary}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8H16C17.8856 8 18.8284 8 19.4142 8.58579C20 9.17157 20 10.1144 20 12V13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21V21C8.22876 21 6.34315 21 5.17157 19.8284C4 18.6569 4 16.7712 4 13V12Z"
        stroke={focused ? 'white' : colors.textPrimary}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default OrderIcon;
