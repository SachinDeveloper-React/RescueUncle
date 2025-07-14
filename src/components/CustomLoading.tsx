import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {moderateScale} from 'react-native-size-matters';

type Props = {};

const CustomLoading = (props: Props) => {
  return (
    <View style={styles.centered}>
      <LottieView
        source={require('../assets/animations/loading.json')}
        autoPlay
        loop
        renderMode="AUTOMATIC"
        style={styles.lottie}
      />
    </View>
  );
};

export default CustomLoading;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  lottie: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
  },
});
