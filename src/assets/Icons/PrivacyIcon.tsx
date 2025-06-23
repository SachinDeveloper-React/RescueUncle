import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const PrivacyIcon = ({
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
      <Path
        d="M12 6C6.55576 6 3.53109 10.2343 2.45554 12.1164C2.23488 12.5025 2.12456 12.6956 2.1367 12.9836C2.14885 13.2716 2.27857 13.4598 2.53799 13.8362C3.8182 15.6935 7.29389 20 12 20C16.7061 20 20.1818 15.6935 21.462 13.8362C21.7214 13.4598 21.8511 13.2716 21.8633 12.9836C21.8754 12.6956 21.7651 12.5025 21.5445 12.1164C20.4689 10.2343 17.4442 6 12 6Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <Circle cx="12" cy="13" r="3" stroke={color} strokeWidth="1.5" />
    </Svg>
  );
};

export default PrivacyIcon;
