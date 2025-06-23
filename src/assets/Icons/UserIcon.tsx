import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  width?: number;
  height?: number;
  onPress?: () => void;
  color?: string;
};

const UserIcon = ({
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
      <Circle
        cx="12"
        cy="8"
        r="3.1"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M4.76958 17.2584C5.38315 14.6981 8.03262 13.5 10.6654 13.5H13.3346C15.9674 13.5 18.6168 14.6981 19.2304 17.2584C19.3184 17.6253 19.3897 18.0129 19.4369 18.4184C19.506 19.0127 19.015 19.5 18.4167 19.5H5.58333C4.98502 19.5 4.494 19.0127 4.56313 18.4184C4.61029 18.0129 4.68165 17.6253 4.76958 17.2584Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default UserIcon;
