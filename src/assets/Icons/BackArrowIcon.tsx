import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  color?: string;
};

const BackArrowIcon = ({color = colors.textPrimary}: Props) => {
  return (
    <Svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <Path
        d="M3.6359 7.85715L10 13.9685L8.18205 15.7143L0 7.85715L8.18205 9.53674e-06L10 1.74577L3.6359 7.85715Z"
        fill={color}
      />
    </Svg>
  );
};

export default BackArrowIcon;
