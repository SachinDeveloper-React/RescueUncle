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
const ShareIcon = ({
  onPress,
  backColor = colors.lightPrimary,
  color = colors.primary,
  height = 29,
  width = 29,
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7771 15.9881L9.52982 15.239L9.52981 15.239L9.52981 15.239C7.1766 14.4546 6 14.0624 6 13.3416C6 12.6209 7.17661 12.2287 9.52982 11.4443L18.043 8.60656C19.6988 8.05463 20.5267 7.77866 20.9637 8.21568C21.4007 8.6527 21.1247 9.48059 20.5728 11.1364L17.7351 19.6496L17.7351 19.6496L17.7351 19.6496C16.9507 22.0028 16.5585 23.1794 15.8377 23.1794C15.117 23.1794 14.7248 22.0028 13.9404 19.6495L13.1913 17.4023L17.5448 13.0488C17.9354 12.6582 17.9354 12.0251 17.5448 11.6345C17.1543 11.244 16.5211 11.244 16.1306 11.6345L11.7771 15.9881Z"
        fill={color}
      />
    </Svg>
  );
};

export default ShareIcon;
