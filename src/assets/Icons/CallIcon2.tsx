import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colors} from '../../constants';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
  color?: string;
  backColor?: string;
};

const CallIcon2 = ({
  onPress,
  width = 29,
  height = 29,
  color = colors.primary,
  backColor = colors.lightPrimary,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="none"
      onPress={onPress}>
      <Circle cx="14.5" cy="14.5" r="14.5" fill={backColor} />
      <Path
        d="M9.06635 8.10032L9.57741 7.58926C9.90285 7.26382 10.4305 7.26382 10.7559 7.58926L12.9107 9.74408C13.2362 10.0695 13.2362 10.5972 12.9107 10.9226L11.4171 12.4163C11.168 12.6653 11.1063 13.0458 11.2638 13.3609C12.1744 15.1821 13.6512 16.6589 15.4724 17.5696C15.7875 17.7271 16.168 17.6653 16.4171 17.4163L17.9107 15.9226C18.2362 15.5972 18.7638 15.5972 19.0893 15.9226L21.2441 18.0774C21.5695 18.4028 21.5695 18.9305 21.2441 19.2559L20.733 19.767C18.9736 21.5264 16.1881 21.7244 14.1975 20.2314L13.1905 19.4762C11.7375 18.3865 10.4468 17.0958 9.35714 15.6429L8.60189 14.6358C7.10893 12.6452 7.30689 9.85978 9.06635 8.10032Z"
        fill={color}
      />
    </Svg>
  );
};

export default CallIcon2;
