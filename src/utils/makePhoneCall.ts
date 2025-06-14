import {Alert, Linking, Platform} from 'react-native';

export const makePhoneCall = async (phoneNumber: string) => {
  if (!phoneNumber) {
    Alert.alert('Invalid phone number');
    return;
  }

  let phoneUrl = `tel:${phoneNumber}`;
  if (Platform.OS === 'ios') {
    phoneUrl = `telprompt:${phoneNumber}`;
  }

  try {
    const supported = await Linking.canOpenURL(phoneUrl);
    if (supported) {
      await Linking.openURL(phoneUrl);
    } else {
      Alert.alert('Phone number is not available');
    }
  } catch (err) {
    console.error('Failed to make a call:', err);
    Alert.alert('An error occurred while trying to make the call');
  }
};
