import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CallIcon2,
  LocationIcon,
  PickupAddressIcon,
  UserIcon,
} from '../../../../../assets';
import AddressRow from './AddressRow';

type Props = {};

const UserSection = (props: Props) => {
  return (
    <View style={styles.section}>
      <View style={[styles.infoRow, {alignItems: 'center'}]}>
        <UserIcon />
        <Text style={styles.label}>Aman Sharma</Text>
        <CallIcon2 />
      </View>

      <AddressRow
        icon={<PickupAddressIcon />}
        title="Pickup Center-1"
        address="Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069"
      />

      <AddressRow
        icon={<LocationIcon />}
        title="Delivery"
        address="201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069"
      />
    </View>
  );
};

export default UserSection;

const styles = StyleSheet.create({
  section: {
    padding: 16,
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    gap: 8,
  },
  label: {
    color: '#2B2E35',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
