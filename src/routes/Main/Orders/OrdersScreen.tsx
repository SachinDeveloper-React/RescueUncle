import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../constants';
import {ordersList} from '../../../constants/orders';
import {CustomOrdersList} from '../../../components';
import {ArrowDownIcon} from '../../../assets';
import {moderateScale} from '../../../utils/scale';

const OrdersScreen = () => {
  const tabs = ['WH', 'Customer', 'SC'];
  const [selectedTab, setSelectedTab] = useState('Customer');

  const handlePress = (tab: string) => {
    setSelectedTab(tab);
    console.log('Selected tab:', tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.tabWrapper}>
          {tabs.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.tab, selectedTab === item && styles.activeTab]}
              onPress={() => handlePress(item)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === item && styles.activeTabText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>05/06/2025</Text>
          <ArrowDownIcon />
        </View>
      </View>

      <CustomOrdersList ordersList={ordersList} />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: moderateScale(16),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
  },
  tabWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 999,
    overflow: 'hidden',
    flex: 1,
    marginRight: moderateScale(8),
  },
  tab: {
    flex: 1,
    paddingVertical: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  activeTab: {
    backgroundColor: 'red',
    borderRadius: 999,
  },
  tabText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  activeTabText: {
    color: '#fff',
  },
  dateContainer: {
    paddingHorizontal: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: moderateScale(10),
    borderRadius: 999,
  },
  dateText: {
    fontSize: moderateScale(12),
    color: '#000',
  },
  arrowIcon: {
    alignItems: 'center',
    transform: [{rotate: '270deg'}],
    marginTop: moderateScale(6),
  },
});
