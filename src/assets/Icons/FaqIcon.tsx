import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const FaqIcon = ({
  color = colors.primary,
  height = 24,
  onPress,
  width = 24,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      onPress={onPress}>
      <Path d="M9 7L13 7" stroke={color} strokeLinecap="round" />
      <Path d="M9 15L12 15" stroke={color} strokeLinecap="round" />
      <Path d="M9 11L15 11" stroke={color} strokeLinecap="round" />
      <Path
        d="M19 11V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Circle
        cx="17.5"
        cy="17.5"
        r="2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M21 21L19.5 19.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default FaqIcon;
