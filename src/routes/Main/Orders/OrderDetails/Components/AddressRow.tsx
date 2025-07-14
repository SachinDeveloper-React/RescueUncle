import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CallIcon2, ShareIcon} from '../../../../../assets';

type Props = {
  icon: React.ReactNode;
  title: string;
  address: string;
};

const AddressRow = ({address, icon, title}: Props) => {
  return (
    <View style={styles.infoRow}>
      {icon}
      <View style={styles.addressBox}>
        <Text style={styles.boldText}>{title}</Text>
        <Text style={styles.normalText}>{address}</Text>
      </View>
      {/* <CallIcon2 /> */}
      {/* <ShareIcon /> */}
    </View>
  );
};

export default AddressRow;

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    gap: 8,
  },
  addressBox: {
    flex: 1,
    gap: 6,
  },
  boldText: {
    fontWeight: 'semibold',
    fontSize: 14,
    color: '#57585A',
  },
  normalText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#57585A',
  },
});
