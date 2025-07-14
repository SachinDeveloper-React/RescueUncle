import React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import {colors} from '../../constants';

const EditVehicleDetailIcon = ({
  width = 24,
  height = 24,
  color = colors.primary,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 13L5 6H19L21 13V18C21 18.55 20.55 19 20 19H19C18.45 19 18 18.55 18 18V17H6V18C6 18.55 5.55 19 5 19H4C3.45 19 3 18.55 3 18V13Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <Circle cx="7" cy="17" r="1.5" fill={color} />
    <Circle cx="17" cy="17" r="1.5" fill={color} />

    <Path
      d="M14.5 3.5L16.5 5.5M12 6L14.5 3.5L18 7L15.5 9.5L12 6Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditVehicleDetailIcon;
