import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {};

const RightArrow = (props: Props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.08325 15.8334L12.9166 10.0001L7.08325 4.16675"
        stroke="#FF5963"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightArrow;
