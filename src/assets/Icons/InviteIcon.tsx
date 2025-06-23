import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
};

const InviteIcon = ({
  color = colors.primary,
  bgColor = colors.lightPrimary,
  width = 34,
  height = 34,
  onPress,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      onPress={onPress}>
      <Circle cx="17" cy="17" r="17" fill={bgColor} />
      <Path
        d="M11.6187 15.3498L12.2515 16.4571C12.5665 17.0084 12.724 17.2841 12.724 17.5863C12.724 17.8885 12.5665 18.1641 12.2515 18.7154L11.6187 19.8228C10.2096 22.2887 9.50502 23.5217 10.0544 24.1331C10.6039 24.7446 11.9049 24.1754 14.5069 23.037L14.5069 23.037L22.1998 19.6713C24.243 18.7775 25.2646 18.3305 25.2646 17.5863C25.2646 16.8421 24.243 16.3951 22.1998 15.5012L14.5069 12.1356C11.9049 10.9972 10.6039 10.428 10.0544 11.0394C9.50502 11.6509 10.2096 12.8838 11.6187 15.3498Z"
        stroke={color}
        stroke-width="1.13793"
      />
    </Svg>
  );
};

export default InviteIcon;
