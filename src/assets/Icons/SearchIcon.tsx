import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SearchIcon = ({width = 20, height = 20, color = '#333'}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 4a7 7 0 105.196 11.933l4.285 4.285a1 1 0 001.415-1.415l-4.285-4.285A7 7 0 0011 4zm0 2a5 5 0 110 10 5 5 0 010-10z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
