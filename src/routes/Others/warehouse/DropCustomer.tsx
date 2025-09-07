import {RefreshControl, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useWarehouseService} from '../../../hooks';
import {CustomOrdersList} from '../../../components';
import {colors} from '../../../constants';
import {moderateScale} from 'react-native-size-matters';
import {navigate} from '../../../navigation';

type Props = {};

const DropCustomer = (props: Props) => {
  const {customerDrop, getWarehouseData} = useWarehouseService();
  useEffect(() => {
    getWarehouseData('customer', {customer_pick_drop_warehouse: 'True'});
  }, []);

  return (
    <View style={styles.container}>
      <CustomOrdersList
        ordersList={customerDrop.pagination.data}
        loading={customerDrop.loading}
        error={customerDrop.error}
        refreshControl={
          <RefreshControl
            refreshing={customerDrop.refreshLoading}
            onRefresh={() =>
              getWarehouseData(
                'customer',
                {customer_pick_drop_warehouse: 'True'},
                true,
              )
            }
          />
        }
        onPress={id => {
          navigate('OrderDetail', {
            id: id,
            tab: 'DC',
            type: 'View',
          });
        }}
        contentContainerStyle={{paddingBottom: 60}}
      />
    </View>
  );
};

export default DropCustomer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: moderateScale(16),
  },
});
