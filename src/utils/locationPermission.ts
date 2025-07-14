import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const requestLocationPermission = async (): Promise<boolean> => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  const result = await check(permission);

  switch (result) {
    case RESULTS.GRANTED:
      return true;

    case RESULTS.DENIED: {
      const newStatus = await request(permission);
      return newStatus === RESULTS.GRANTED;
    }

    case RESULTS.BLOCKED:
      console.warn('Permission blocked. Ask user to enable it in settings.');
      const newStatus = await request(permission);
      return newStatus === RESULTS.GRANTED;

    default:
      return false;
  }
};
