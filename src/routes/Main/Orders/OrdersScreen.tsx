import React, {useEffect} from 'react';
import {
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../constants';
import {CustomDatePickerModal, CustomOrdersList} from '../../../components';
import {ArrowDownIcon} from '../../../assets';
import {moderateScale} from '../../../utils/scale';
import {formatDate} from '../../../utils';
import {useOrderService} from '../../../hooks';
import {navigate} from '../../../navigation';

const OrdersScreen = () => {
  const {
    getOrderData,
    isDatePickerVisible,
    selectedDate,
    selectedTab,
    setIsDatePickerVisible,
    setSelectedDate,
    tabs,
    handlePress,
    Customer,
    SC,
    VF,
    refreshLoadingState,
  } = useOrderService();

  useEffect(() => {
    getOrderData('Customer');
  }, []);

  const activeData =
    selectedTab === 'Customer' ? Customer : selectedTab === 'VF' ? VF : SC;

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

        <TouchableOpacity
          style={styles.dateContainer}
          onPress={() => setIsDatePickerVisible(true)}>
          <Text style={styles.dateText}>
            {selectedDate ? formatDate(selectedDate as any) : 'Select Date'}
          </Text>
          <ArrowDownIcon color={colors.primary} />
        </TouchableOpacity>
        <CustomDatePickerModal
          visible={isDatePickerVisible}
          onClose={() => setIsDatePickerVisible(false)}
          date={selectedDate}
          onSelect={date => setSelectedDate(date)}
          title="Pick Order Date"
        />
      </View>

      <CustomOrdersList
        ordersList={activeData.pagination.data}
        loading={activeData.loading}
        error={activeData.error}
        refreshControl={
          <RefreshControl
            refreshing={refreshLoadingState[selectedTab]}
            onRefresh={() => getOrderData(selectedTab, true)}
          />
        }
        onPress={id => {
          navigate('OrderDetail', {
            id: id,
            tab: selectedTab,
          });
        }}
      />
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
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  tabText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: moderateScale(12),
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: moderateScale(16),
    borderRadius: moderateScale(10),
    width: '90%',
    alignSelf: 'center',
  },
});
