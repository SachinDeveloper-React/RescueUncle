import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CallIcon2,
  LocationIcon,
  PickupAddressIcon,
  UserIcon,
} from '../../../../../assets';
import AddressRow from './AddressRow';
import {colors} from '../../../../../constants';

type Props = {
  customerDetails: {
    country_calling_code: number;
    mobile: number;
    alternative_contact_number: number;
    full_name: string;
    address: {
      address_type: string;
      full_address: string;
      address_state: string;
      address_district: string;
      address_pincode: string;
      address_country: string;
    };
  };
};

const UserSection = ({customerDetails}: Props) => {
  return (
    <View style={styles.section}>
      <View style={[styles.infoRow, {alignItems: 'center'}]}>
        <UserIcon />
        <Text style={styles.label}>{customerDetails.full_name}</Text>
        <CallIcon2 />
      </View>

      <AddressRow
        icon={<PickupAddressIcon />}
        title={`${customerDetails.address.address_state}, ${customerDetails.address.address_pincode}`}
        address={`${customerDetails.address.full_address}, ${customerDetails.address.address_state} ${customerDetails.address.address_pincode}`}
      />

      <AddressRow
        icon={<LocationIcon />}
        title="Warehouse"
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
    gap: 8,
  },
  label: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
