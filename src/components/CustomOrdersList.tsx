import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  RefreshControlProps,
  ViewStyle,
} from 'react-native';
import {ArrowDownIcon, NoDataFound} from '../assets';
import {moderateScale} from '../utils/scale';
import {colors} from '../constants';

import LottieView from 'lottie-react-native';
import {ServiceData} from '../@types';

type Props = {
  ordersList: ServiceData[];
  loading?: boolean;
  refreshControl?: React.ReactElement<RefreshControlProps>;
  error?: string | null;
  onPress: (id: string | number) => void;
  contentContainerStyle?: ViewStyle;
};

const statusColors: Record<string, string> = {
  PP: '#FF5963',
  PF: '#E81F2B',
  BG: '#0050AA',
  DF: '#E81F2B',
  D: '#34A853',
  DP: '#FF5963',
  DR: '#0050AA',
};
const statusBgColors: Record<string, string> = {
  PP: '#FFE5E7',
  PF: '#FFE5E7',
  BG: '#D0E6FF',
  DF: '#FFE5E7',
  D: '#D9FFE3',
  DP: '#FFE5E7',
  DR: '#D0E6FF',
};

const CustomOrdersList = ({
  ordersList,
  error,
  loading,
  refreshControl,
  onPress,
  contentContainerStyle,
}: Props) => {
  const renderItem = ({item}: {item: ServiceData}) => (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={`Order ${item.service_id} with status ${item.service_type}`}
      testID={`order_card_${item.service_id}`}
      style={styles.cardContainer}
      onPress={() => onPress(item.service_id)}>
      <View style={styles.card}>
        <View>
          <Text style={styles.label}>Order No.</Text>
          <Text style={styles.orderNumber} testID="order_number">
            {item.service_id}
          </Text>
        </View>
        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor: statusBgColors['BG'] ?? '#E0E0E0',
            },
          ]}
          accessible
          accessibilityLabel={`Status: ${item.service_id}`}
          testID={`status_${item.service_id}`}>
          <Text
            style={[styles.statusText, {color: statusColors['BG'] ?? '#000'}]}>
            {item.customer_details.address.address_pincode}
          </Text>
        </View>
      </View>
      <View style={styles.arrowIcon}>
        <ArrowDownIcon color={colors.primary} />
      </View>
    </Pressable>
  );

  // Show loader
  if (loading) {
    return (
      <View style={styles.centered}>
        <LottieView
          source={require('../assets/animations/loading.json')}
          autoPlay
          loop
          renderMode="AUTOMATIC"
          style={styles.lottie}
        />
      </View>
    );
  }

  return (
    <FlatList
      data={ordersList}
      keyExtractor={item => `orderlist_${item.service_id}`}
      renderItem={renderItem}
      contentContainerStyle={
        ordersList.length === 0
          ? {flex: 1}
          : [contentContainerStyle, styles.listContent]
      }
      // scrollEnabled={ordersList.length !== 0}
      accessibilityRole="list"
      accessible
      testID="orders_list"
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      updateCellsBatchingPeriod={10}
      maxToRenderPerBatch={10}
      removeClippedSubviews
      refreshControl={refreshControl}
      renderToHardwareTextureAndroid
      ListEmptyComponent={() => {
        if (error) {
          return (
            <View style={styles.centered}>
              <LottieView
                source={require('../assets/animations/error.json')}
                autoPlay
                loop
                renderMode="AUTOMATIC"
                style={styles.lottie}
              />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          );
        } else {
          return (
            <View style={styles.centered}>
              <NoDataFound />
              <Text style={styles.emptyText}>No New Orders</Text>
            </View>
          );
        }
      }}
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  loadingText: {
    fontSize: moderateScale(18),
    color: colors.textPrimary,
  },
  errorText: {
    fontSize: moderateScale(16),
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: moderateScale(20),
  },
  emptyText: {
    color: '#2B2E35',
    fontSize: 20,
    fontWeight: '400',
  },
  lottie: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
  },
});
