import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const StarIcon = ({
  color = colors.primary,
  width = 17,
  height = 17,
  onPress,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      onPress={onPress}>
      <Path
        d="M9.00989 0.31696C8.9141 0.122875 8.71644 0 8.5 0C8.28357 0 8.0859 0.122875 7.99011 0.31696L5.67148 5.01502L0.486857 5.76839C0.272672 5.79952 0.0947282 5.94954 0.0278461 6.15538C-0.0390361 6.36122 0.0167424 6.58718 0.171729 6.73826L3.92336 10.3952L3.03772 15.5589C3.00113 15.7722 3.08882 15.9878 3.26392 16.115C3.43902 16.2422 3.67116 16.259 3.86273 16.1583L8.5 13.7203L13.1373 16.1583C13.3288 16.259 13.561 16.2422 13.7361 16.115C13.9112 15.9878 13.9989 15.7722 13.9623 15.5589L13.0766 10.3952L16.8283 6.73826C16.9833 6.58718 17.039 6.36122 16.9722 6.15538C16.9053 5.94954 16.7273 5.79952 16.5131 5.76839L11.3285 5.01502L9.00989 0.31696Z"
        fill={color}
      />
    </Svg>
  );
};

export default StarIcon;
