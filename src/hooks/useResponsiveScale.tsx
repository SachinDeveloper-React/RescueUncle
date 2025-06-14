import {useWindowDimensions, PixelRatio, Platform} from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const useResponsiveScale = () => {
  const {width, height} = useWindowDimensions();
  const pixelRatio = PixelRatio.get();
  const fontScaleFactor = PixelRatio.getFontScale();

  const scale = (size: number) => (width / guidelineBaseWidth) * size;

  const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

  const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;

  const scaleFont = (size: number) => size * fontScaleFactor;

  const getImageSuffix = (): string => {
    if (pixelRatio >= 3) return '@3x';
    if (pixelRatio >= 2) return '@2x';
    return '';
  };

  return {
    scale,
    verticalScale,
    moderateScale,
    scaleFont,
    getImageSuffix,
    pixelRatio,
    fontScaleFactor,
    windowWidth: width,
    windowHeight: height,
    isHighDensity: pixelRatio >= 2.5,
  };
};

export default useResponsiveScale;
