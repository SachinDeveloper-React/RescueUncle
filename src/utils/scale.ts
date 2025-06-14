// utils/scale.ts
import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const guidelineBaseWidth = SCREEN_WIDTH;

export const scale = (size: number) =>
  (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
