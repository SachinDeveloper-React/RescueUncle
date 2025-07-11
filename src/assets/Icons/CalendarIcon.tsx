import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const CalendarIcon = ({
  color = colors.primary,
  height = 20,
  onPress,
  width = 28,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 20"
      fill="none"
      onPress={onPress}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4442 3.6H18.6664V2H17.1109V3.6H10.8886V2H9.33309V3.6H8.55531C7.69198 3.6 6.99976 4.32 6.99976 5.2V16.4C6.99976 17.28 7.69198 18 8.55531 18H19.4442C20.2998 18 20.9998 17.28 20.9998 16.4V5.2C20.9998 4.32 20.2998 3.6 19.4442 3.6ZM19.4442 16.4H8.55531V7.6H19.4442V16.4ZM9.72198 10.8C9.72198 9.696 10.5931 8.8 11.6664 8.8C12.7398 8.8 13.6109 9.696 13.6109 10.8C13.6109 11.904 12.7398 12.8 11.6664 12.8C10.5931 12.8 9.72198 11.904 9.72198 10.8Z"
        fill={color}
      />
    </Svg>
  );
};

export default CalendarIcon;
