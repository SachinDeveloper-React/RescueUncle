import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../../constants';

type Charges = {
  discount_amount: number;
  total_service_charges: number;
  final_service_charges: number;
  total_amount: number;
  paid_amount: number;
  pending_payment: number;
  refunded_amount: number;
};

type Props = {
  charges: Charges;
  payment_type: string;
};

const ChargesInfo = ({charges, payment_type}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charges Summary</Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Service Charges: </Text>₹
        {charges.total_service_charges}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Discount: </Text>- ₹{charges.discount_amount}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Final Charges: </Text>₹
        {charges.final_service_charges}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Total Amount: </Text>₹{charges.total_amount}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Paid: </Text>₹{charges.paid_amount}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Pending Payment: </Text>₹
        {charges.pending_payment}
      </Text>
      {charges.refunded_amount > 0 && (
        <Text style={styles.text}>
          <Text style={styles.label}>Refunded Amount: </Text>₹
          {charges.refunded_amount}
        </Text>
      )}

      <View style={styles.divider} />

      <Text style={[styles.text, {color: colors.primary}]}>
        <Text style={styles.label}>Payment Type: </Text>
        {payment_type.toUpperCase()}
      </Text>
    </View>
  );
};

export default ChargesInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  title: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 8,
  },
  label: {
    fontWeight: '500',
    color: colors.textPrimary,
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
});
