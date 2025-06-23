import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const EmailIcon = ({
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
      <Rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth="1.8"
      />
      <Path
        d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
        stroke={color}
        strokeWidth="1.8"
      />
    </Svg>
  );
};

export default EmailIcon;
