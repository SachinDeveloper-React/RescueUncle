import React from 'react';
import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import {Order} from '../@types/order';
import {ArrowDownIcon} from '../assets';
import {moderateScale} from '../utils/scale';
import {navigate} from '../navigation';
import {colors} from '../constants';

type Props = {
  ordersList: Order[];
};

const statusColors: Record<string, string> = {
  PP: '#FF5963',
  PF: '#E81F2B',
  PR: '#0050AA',
  DF: '#E81F2B',
  D: '#34A853',
  DP: '#FF5963',
  DR: '#0050AA',
};
const statusBgColors: Record<string, string> = {
  PP: '#FFE5E7',
  PF: '#FFE5E7',
  PR: '#D0E6FF',
  DF: '#FFE5E7',
  D: '#D9FFE3',
  DP: '#FFE5E7',
  DR: '#D0E6FF',
};

const CustomOrdersList = ({ordersList}: Props) => {
  const renderItem = ({item}: {item: Order}) => (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={`Order ${item.orderNumber} with status ${item.status.label}`}
      testID={`order_card_${item.orderNumber}`}
      style={styles.cardContainer}
      onPress={() => {
        navigate('OrderDetail');
      }}>
      <View style={styles.card}>
        <View>
          <Text style={styles.label}>Order No.</Text>
          <Text style={styles.orderNumber} testID="order_number">
            {item.orderNumber}
          </Text>
        </View>
        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor: statusBgColors[item.status.code] ?? '#E0E0E0',
            },
          ]}
          accessible
          accessibilityLabel={`Status: ${item.status.label}`}
          testID={`status_${item.status.code}`}>
          <Text
            style={[
              styles.statusText,
              {color: statusColors[item.status.code] ?? '#000'},
            ]}>
            {item.status.label}
          </Text>
        </View>
      </View>
      <View style={styles.arrowIcon}>
        <ArrowDownIcon color={colors.primary} />
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={ordersList}
      keyExtractor={item => `orderlist_${item.orderNumber}`}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
      accessibilityRole="list"
      accessible
      testID="orders_list"
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      updateCellsBatchingPeriod={10}
      maxToRenderPerBatch={10}
      removeClippedSubviews
      renderToHardwareTextureAndroid
    />
  );
};

export default CustomOrdersList;

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: moderateScale(4),
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: moderateScale(15),
    marginVertical: moderateScale(8),
    borderRadius: moderateScale(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.textPrimary,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  orderNumber: {
    color: colors.textPrimary,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  statusContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(4),
    borderRadius: moderateScale(4),
  },
  statusText: {
    fontWeight: '500',
    fontSize: moderateScale(13),
  },
  arrowIcon: {
    alignItems: 'center',
    marginTop: moderateScale(6),
  },
});
