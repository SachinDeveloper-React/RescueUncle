import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../../constants';

type Props = {
  device_id: string;
  device_name: string;
  ru_device_id: string;
};

const DeliveryInfo = ({device_id, device_name, ru_device_id}: Props) => {
  return (
    <View style={[styles.deliveryContainer]}>
      <View style={[styles.deliveryBox]}>
        <View style={{flex: 1}}>
          <Text style={styles.deliveryTitle}>Device Details</Text>
          <Text style={styles.normalText}>
            <Text style={{fontWeight: '500'}}>Device Name:</Text> {device_name}
          </Text>
          <Text style={styles.boldText}>
            <Text style={{fontWeight: '500'}}>Device Id:</Text> {device_id}
          </Text>
          <Text style={styles.boldText}>
            <Text style={{fontWeight: '500'}}>Service Id:</Text> {ru_device_id}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryInfo;

const styles = StyleSheet.create({
  deliveryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  deliveryContainer: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  deliveryTitle: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'medium',
    marginBottom: 4,
  },
  timeLeftBox: {
    // flex: 1,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderStyle: 'dotted',
    alignItems: 'center',
  },
  timeLeftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeLeftLabel: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'semibold',
    fontSize: 14,
    color: colors.textPrimary,
  },
  normalText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: colors.textPrimary,
  },
});
