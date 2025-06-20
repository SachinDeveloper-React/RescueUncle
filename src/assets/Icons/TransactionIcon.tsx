import React from 'react';
import Svg, {Path} from 'react-native-svg';

const TransactionIcon = ({size = 24, color = '#FF5963'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 6H15.17L12.59 3.41L14 2L19 7L14 12L12.59 10.59L15.17 8H4V6Z"
        fill={color}
      />
      <Path
        d="M20 18H8.83L11.41 20.59L10 22L5 17L10 12L11.41 13.41L8.83 16H20V18Z"
        fill={color}
      />
    </Svg>
  );
};

export default TransactionIcon;
