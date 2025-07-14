import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const BankIcon = ({
  color = colors.primary,
  width = 24,
  height = 24,
  onPress,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      onPress={onPress}>
      <Path
        d="M3 10h18L12 3 3 10z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 10v10h2V10H5zM17 10v10h2V10h-2zM9 10v10h2V10H9zM13 10v10h2V10h-2z"
        fill={color}
      />
      <Path d="M3 20h18" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </Svg>
  );
};

export default BankIcon;
