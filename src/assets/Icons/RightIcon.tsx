import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {};

const RightIcon = (props: Props) => {
  return (
    <Svg width="10" height="17" viewBox="0 0 10 17" fill="none">
      <Path
        d="M6.3641 8.59461L0 2.41758L1.81795 0.653076L10 8.59461L1.81795 16.5361L0 14.7716L6.3641 8.59461Z"
        fill="#969AA4"
      />
    </Svg>
  );
};

export default RightIcon;

const styles = StyleSheet.create({});
