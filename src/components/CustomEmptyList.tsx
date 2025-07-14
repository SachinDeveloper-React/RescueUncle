import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NoDataFound} from '../assets';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  empty: string;
};

const CustomEmptyList = ({empty = 'No New Orders'}: Props) => {
  return (
    <View style={styles.centered}>
      <NoDataFound />
      <Text style={styles.emptyText}>{empty}</Text>
    </View>
  );
};

export default CustomEmptyList;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  emptyText: {
    color: '#2B2E35',
    fontSize: 20,
    fontWeight: '400',
  },
});
