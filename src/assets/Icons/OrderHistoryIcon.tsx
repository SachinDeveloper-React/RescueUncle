import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const OrderHistoryIcon = ({size = 24, color = '#FF5963'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path
        d="M12 6V12L16 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default OrderHistoryIcon;
