import {RefreshControl, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useWarehouseService} from '../../../hooks';
import {CustomOrdersList} from '../../../components';
import {colors} from '../../../constants';
import {moderateScale} from 'react-native-size-matters';
import {navigate} from '../../../navigation';

type Props = {};

const DropService = (props: Props) => {
  const {serviceDrop, getWarehouseData} = useWarehouseService();
  useEffect(() => {
    getWarehouseData('service', {
      service_center_device_dropped_warehouse: 'True',
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomOrdersList
        ordersList={serviceDrop.pagination.data}
        loading={serviceDrop.loading}
        error={serviceDrop.error}
        refreshControl={
          <RefreshControl
            refreshing={serviceDrop.refreshLoading}
            onRefresh={() =>
              getWarehouseData(
                'service',
                {service_center_device_dropped_warehouse: 'True'},
                true,
              )
            }
          />
        }
        onPress={id => {
          navigate('OrderDetail', {
            id: id,
            tab: 'DS',
            type: 'View',
          });
        }}
        contentContainerStyle={{paddingBottom: 60}}
      />
    </View>
  );
};

export default DropService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: moderateScale(16),
  },
});
