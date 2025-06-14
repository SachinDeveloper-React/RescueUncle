import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PixelRatio,
  StyleSheet,
} from 'react-native';
import {CameraIcon} from '../assets';
import {colors, spacing, typography} from '../constants';

const CustomUploadPhotoSection = ({onPress}: {onPress?: () => void}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/avatar.png')}
        style={styles.avatar}
        accessibilityLabel="Profile Avatar Placeholder"
      />

      <TouchableOpacity
        onPress={onPress}
        style={styles.uploadBtn}
        accessibilityLabel="Upload Photo"
        accessibilityHint="Tap to upload or change your profile photo">
        <CameraIcon />
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomUploadPhotoSection;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2 * PixelRatio.get(),
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.sm,
    borderRadius: 50,
    gap: spacing.xxs,
    borderColor: colors.primary,
    backgroundColor: colors.inputBackground,
  },
  uploadText: {
    color: colors.primary,
    fontSize: typography.body.fontSize,
    fontWeight: '500',
  },
});
