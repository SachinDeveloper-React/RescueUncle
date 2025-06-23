// components/icons/PreviewIcon.tsx
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../constants';
type Props = {
  onPress?: () => void;
  color?: string;
  size?: number;
};
const PreviewIcon = ({
  size = 24,
  color = colors.textPrimary,
  onPress,
}: Props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    onPress={onPress}>
    <Path
      d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 
         5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"
      fill={color}
    />
  </Svg>
);

export default PreviewIcon;
