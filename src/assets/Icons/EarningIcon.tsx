import React from 'react';
import Svg, {Path} from 'react-native-svg';

const EarningIcon = ({size = 24, color = '#FF5963'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 6H15C16.66 6 18 7.34 18 9C18 10.66 16.66 12 15 12H8M8 6V18M8 12H15C16.66 12 18 13.34 18 15C18 16.66 16.66 18 15 18H8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default EarningIcon;
