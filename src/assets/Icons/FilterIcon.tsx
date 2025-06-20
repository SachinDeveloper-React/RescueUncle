import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const FilterIcon = ({width = 20, height = 20, color = '#333'}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 6h16M6 12h12M10 18h4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="4" cy="6" r="1" fill={color} />
      <Circle cx="6" cy="12" r="1" fill={color} />
      <Circle cx="10" cy="18" r="1" fill={color} />
    </Svg>
  );
};

export default FilterIcon;
