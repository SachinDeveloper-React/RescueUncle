import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const ClockIcon = ({
  onPress,
  width = 20,
  height = 20,
  color = colors.primary,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      onPress={onPress}>
      <Circle cx="10" cy="10" r="7.56667" stroke={color} strokeWidth="1.8" />
      <Path
        d="M13.75 10H10.25C10.1119 10 10 9.88811 10 9.75004V7.08337"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ClockIcon;
