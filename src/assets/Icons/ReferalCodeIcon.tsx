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

const ReferalCodeIcon = ({
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
        d="M24.6205 17.5862V20.3413C24.6205 22.7731 24.6205 23.989 23.865 24.7445C23.1096 25.4999 21.8937 25.4999 19.4619 25.4999H12.7498C11.5357 25.4999 10.5515 24.5157 10.5515 23.3017V23.3017C10.5515 22.0876 11.5357 21.1034 12.7498 21.1034H19.4619C21.8937 21.1034 23.1096 21.1034 23.865 20.3479C24.6205 19.5925 24.6205 18.3766 24.6205 15.9448V14.831C24.6205 12.3992 24.6205 11.1833 23.865 10.4278C23.1096 9.67236 21.8937 9.67236 19.4619 9.67236H15.7101C13.2783 9.67236 12.0624 9.67236 11.307 10.4278C10.5515 11.1833 10.5515 12.3992 10.5515 14.831V23.3017"
        stroke={color}
        strokeWidth="1.28966"
      />
      <Path
        d="M14.9482 15.8275L15.7949 16.6742C16.2986 17.1778 17.1151 17.1778 17.6188 16.6742L20.2241 14.0688"
        stroke={color}
        strokeWidth="1.28966"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ReferalCodeIcon;
