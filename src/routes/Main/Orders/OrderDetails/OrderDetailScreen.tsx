import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import {DeliveryInfo, Header, OrderDetails, UserSection} from './Components';
import {navigate} from '../../../../navigation';

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

          <TouchableOpacity
            style={styles.confirmBtn}
            onPress={() => navigate('DeviceExterior')}>
            <Text style={styles.confirmText}>Confirm Pickup</Text>
          </TouchableOpacity>
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
    backgroundColor: '#fff',
    // padding: 16,
    margin: 16,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
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
    backgroundColor: '#FF5C5C',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    margin: 16,
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
