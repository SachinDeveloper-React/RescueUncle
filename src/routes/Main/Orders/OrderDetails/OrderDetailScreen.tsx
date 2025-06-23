import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import {DeliveryInfo, Header, OrderDetails, UserSection} from './Components';
import {navigate} from '../../../../navigation';
import {CustomButton} from '../../../../components';
import {colors} from '../../../../constants';

export default function OrderDetailScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets>
        <View style={styles.container}>
          <Header />
          <OrderDetails />
          <UserSection />
          <DeliveryInfo />

          <CustomButton
            title="Confirm Pickup"
            style={styles.confirmBtn}
            onPress={() => navigate('DeviceExterior')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
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
  confirmText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
