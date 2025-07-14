import {Alert, PermissionsAndroid, Platform} from 'react-native';
import {Asset, CameraOptions, launchCamera} from 'react-native-image-picker';

const requestCameraPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn('Permission Error:', err);
      return false;
    }
  }
  return true;
};

export const openCamera = async (): Promise<Asset | null> => {
  const hasPermission = await requestCameraPermission();
  if (!hasPermission) {
    Alert.alert(
      'Permission Denied',
      'Camera access is required to take a photo.',
    );
    return null;
  }

  const options: CameraOptions = {
    mediaType: 'photo',
    cameraType: 'back',
    quality: 0.5,
    saveToPhotos: true,
  };

  const result = await launchCamera(options);

  if (result.didCancel) {
    return null;
  }

  if (result.assets && result.assets.length > 0) {
    return result.assets[0] || null;
  } else if (result.errorCode) {
    Alert.alert('Error', result.errorMessage || 'Failed to capture image');
  }

  return null;
};

export const openVideoCamera = async (): Promise<Asset | null> => {
  const hasPermission = await requestCameraPermission();
  if (!hasPermission) {
    Alert.alert(
      'Permission Denied',
      'Camera access is required to record a video.',
    );
    return null;
  }

  const options: CameraOptions = {
    mediaType: 'video',
    videoQuality: 'high',
    durationLimit: 60,
    saveToPhotos: true,
    cameraType: 'back',
    formatAsMp4: true,
  };

  const result = await launchCamera(options);

  if (result.didCancel) {
    return null;
  }

  if (result.assets && result.assets.length > 0) {
    const videoUri = result.assets[0].uri;
    if (videoUri?.endsWith('.mp4')) {
      return result.assets[0] || null;
    } else {
      Alert.alert('Warning', 'Video recorded is not in MP4 format.');
      return result.assets[0] ?? null;
    }
  } else if (result.errorCode) {
    Alert.alert('Error', result.errorMessage || 'Failed to record video');
  }

  return null;
};
