import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
};

const CallIcon = ({
  onPress,
  width = 15,
  height = 15,
  color = colors.primary,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      onPress={onPress}>
      <Path
        d="M2.06635 1.10032L2.57741 0.589256C2.90285 0.263819 3.43048 0.263818 3.75592 0.589255L5.91074 2.74408C6.23618 3.06951 6.23618 3.59715 5.91074 3.92259L4.41707 5.41627C4.168 5.66533 4.10625 6.04584 4.26378 6.36089C5.17441 8.18215 6.65119 9.65893 8.47245 10.5696C8.7875 10.7271 9.168 10.6653 9.41707 10.4163L10.9107 8.92259C11.2362 8.59715 11.7638 8.59715 12.0893 8.92259L14.2441 11.0774C14.5695 11.4028 14.5695 11.9305 14.2441 12.2559L13.733 12.767C11.9736 14.5264 9.18809 14.7244 7.19748 13.2314L6.19048 12.4762C4.73753 11.3865 3.44685 10.0958 2.35714 8.64286L1.60189 7.63585C0.108935 5.64525 0.306891 2.85978 2.06635 1.10032Z"
        fill={color}
      />
    </Svg>
  );
};

export default CallIcon;
