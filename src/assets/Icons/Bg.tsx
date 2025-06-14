import React from 'react';
import Svg, {Defs, Ellipse, LinearGradient, Stop} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
};
const Bg = ({width, height}: Props) => {
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
          <Stop offset="0.4375" stopColor="#FF6B74" />
          <Stop offset="0.753008" stopColor="#FC848B" stopOpacity={0.58} />
          <Stop offset="1" stopColor="#FFE8D6" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Bg;
