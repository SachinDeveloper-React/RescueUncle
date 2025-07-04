import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#184ea3',
  lightPrimary: '#EAEFF7',
  textPrimary: '#2B2E35',
  inputBorder: '#969AA4',
  inputBackground: '#F5F5F5',
  white: '#FFFFFF',
  black: '#000000',
  shading: {
    stopColor: '#184EA3',
    stopColor2: '#577EBC',
    stopColor3: '#96AFD5',
  },
  error: 'red',
};

export const spacing = {
  xxs: 4,
  xsm: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
};

type FontWeightType =
  | 'normal'
  | 'regular'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export const typography = {
  heading: {
    fontSize: width * 0.06,
    fontWeight: '800' as FontWeightType,
    color: '#000000',
  },
  subHeading: {
    fontSize: width * 0.045,
    fontWeight: '600' as FontWeightType,
    color: '#000000',
  },
  body: {
    fontSize: width * 0.045,
    fontWeight: '400' as FontWeightType,
    color: '#2B2E35',
  },
};

export default typography;
