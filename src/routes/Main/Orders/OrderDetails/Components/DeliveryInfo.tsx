import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StatusDropdown from './StatusDropdown';
import {ClockIcon} from '../../../../../assets';

type Props = {};

const DeliveryInfo = (props: Props) => {
  const [statusOpen, setStatusOpen] = React.useState(false);
  const [statusValue, setStatusValue] = React.useState(null);
  const [statusItems, setStatusItems] = React.useState([
    {label: 'Picked', value: 'picked'},
    {label: 'Pending', value: 'pending'},
    {label: 'Cancelled', value: 'cancelled'},
  ]);
  return (
    <View style={[styles.deliveryContainer]}>
      <View style={[styles.deliveryBox]}>
        <View style={{flex: 1}}>
          <Text style={styles.deliveryTitle}>Delivery Pickup By</Text>
          <Text style={styles.normalText}>Tomorrow</Text>
          <Text style={styles.boldText}>5:30 PM, Thu, 25/08/2023</Text>
        </View>
        <View style={styles.timeLeftBox}>
          <View style={styles.timeLeftHeader}>
            <ClockIcon />
            <Text style={styles.timeLeftLabel}>TIME LEFT</Text>
          </View>
          <Text style={styles.boldText}>1:04 Hrs</Text>
        </View>
      </View>
      <StatusDropdown
        statusOpen={statusOpen}
        statusValue={statusValue}
        statusItems={statusItems}
        setStatusOpen={setStatusOpen}
        setStatusValue={setStatusValue}
        setStatusItems={setStatusItems}
      />
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
    backgroundColor: '#FFECEC',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  deliveryTitle: {
    fontSize: 16,
    color: '#FF5963',
    fontWeight: 'medium',
    marginBottom: 4,
  },
  timeLeftBox: {
    // flex: 1,
    borderColor: '#FF5C5C',
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
    color: '#FF5963',
    fontWeight: 'bold',
    fontSize: 14,
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
