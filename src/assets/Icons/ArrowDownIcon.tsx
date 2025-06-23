import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const ArrowDownIcon = ({color = '#FF5963', height = 7, width = 11}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 11 7" fill="none">
      <Path
        d="M5.49908 3.89276L9.77777 0.0917968L11 1.17757L5.49908 6.0643L-0.00183779 1.17757L1.2204 0.0917965L5.49908 3.89276Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowDownIcon;
