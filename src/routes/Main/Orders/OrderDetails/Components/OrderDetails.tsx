import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../../../constants';

const OrderDetails = ({
  id,
  date,
  pincode,
}: {
  id: string;
  date: string;
  pincode: string;
}) => (
  <View style={[styles.subRow, styles.orderDetails]}>
    <View>
      <Text style={styles.orderInfo}>Service No. #{id}</Text>
      <Text style={styles.orderInfo}>Today Date: {date}</Text>
    </View>
    <View style={styles.statusBadge}>
      <Text style={styles.statusText}>{pincode}</Text>
    </View>
  </View>
);

export default OrderDetails;
const styles = StyleSheet.create({
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  orderDetails: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderColor: colors.inputBorder,
  },
  orderInfo: {
    fontSize: 14,
    color: '#000',
  },
  statusBadge: {
    backgroundColor: colors.lightPrimary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    color: colors.primary,
    fontSize: 12,
  },
});
