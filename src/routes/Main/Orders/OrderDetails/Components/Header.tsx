import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CallIcon2, ShareIcon} from '../../../../../assets';
import {makePhoneCall} from '../../../../../utils';

export const Header = ({
  addressType,
  phoneNumber,
}: {
  addressType: string;
  phoneNumber: string;
}) => {
  return (
    <View style={[styles.headerRow, styles.header]}>
      <Text style={styles.headerTitle}>{addressType}</Text>
      <View style={styles.iconRow}>
        <CallIcon2 onPress={() => makePhoneCall(phoneNumber)} />
        <ShareIcon />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 16,
  },
});
