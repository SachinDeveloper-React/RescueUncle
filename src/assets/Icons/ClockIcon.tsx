import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const ClockIcon = ({onPress}: Props) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      onPress={onPress}>
      <Circle cx="10" cy="10" r="7.56667" stroke="#FF5963" strokeWidth="1.8" />
      <Path
        d="M13.75 10H10.25C10.1119 10 10 9.88811 10 9.75004V7.08337"
        stroke="#FF5963"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ClockIcon;
