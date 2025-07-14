import React from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Platform} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {moderateScale} from 'react-native-size-matters';
import {
  ChargesInfo,
  DeliveryInfo,
  Header,
  OrderDetails,
  UserSection,
} from './Components';
import {CustomButton, CustomError, CustomLoading} from '../../../../components';
import {colors} from '../../../../constants';
import {useOrderDetailsService} from '../../../../hooks';
import {RootStackParamList} from '../../../../navigation';
import {OrderDetails as OrderItem} from '../../../../@types/orderDetails';
import {formatDate} from '../../../../utils';

type Props = NativeStackScreenProps<RootStackParamList, 'OrderDetail'>;

export default function OrderDetailScreen({navigation, route}: Props) {
  const {id, tab} = route.params;

  const {data, error, loading, onRefresh} = useOrderDetailsService({
    id: String(id),
    tab,
  });

  if (loading) return <CustomLoading />;
  if (error) return <CustomError />;

  const renderOrderDetailCard = ({item}: {item: OrderItem}) => {
    const {
      service_id,
      created_at,
      customer_details,
      device_details,
      charges,
      payment_type,
    } = item;

    return (
      <View style={styles.card}>
        <Header
          addressType={customer_details?.address?.address_type}
          phoneNumber={customer_details?.mobile?.toString() || ''}
        />
        <OrderDetails
          id={String(service_id)}
          date={formatDate(created_at)}
          pincode={customer_details?.address?.address_pincode}
        />
        <UserSection customerDetails={customer_details} />
        <DeliveryInfo
          device_id={device_details?.device_id}
          device_name={device_details?.device_name}
          ru_device_id={device_details?.ru_device_id}
        />
        {charges && (
          <ChargesInfo charges={charges} payment_type={payment_type} />
        )}
        <CustomButton
          title="Confirm Pickup"
          style={styles.confirmBtn}
          onPress={() => navigation.navigate('DeviceExterior')}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderOrderDetailCard}
        keyExtractor={item => item.service_id.toString()}
        contentContainerStyle={styles.listContent}
        refreshing={loading}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  confirmBtn: {
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    margin: 16,
  },
  listContent: {
    paddingVertical: moderateScale(4),
  },
});
