import React from 'react';
import Svg, {Defs, Ellipse, LinearGradient, Stop} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  width: number;
  height: number;
  stopColor?: string;
  stopColor2?: string;
  stopColor3?: string;
};
const Bg = ({
  width,
  height,
  stopColor2 = colors.shading.stopColor2,
  stopColor3 = colors.shading.stopColor3,
  stopColor = colors.shading.stopColor,
}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 390 605" fill="none">
      <Ellipse
        cx="59.9265"
        cy="178.982"
        rx="508.258"
        ry="417.01"
        transform="rotate(16.3128 59.9265 178.982)"
        fill="url(#paint0_linear_11_1609)"
        fillOpacity={0.66}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_11_1609"
          x1="317.078"
          y1="-153.097"
          x2="59.9265"
          y2="595.992"
          gradientUnits="userSpaceOnUse">
          <Stop offset="0.4375" stopColor={stopColor} />
          <Stop offset="0.753008" stopColor={stopColor2} stopOpacity={0.58} />
          <Stop offset="1" stopColor={stopColor3} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Bg;
