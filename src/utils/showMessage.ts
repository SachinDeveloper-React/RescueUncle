import {Alert, Platform, ToastAndroid} from 'react-native';

export const showMessage = (message: string, title: string = 'Info') => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(title, message);
  }
};
