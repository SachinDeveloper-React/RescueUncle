import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, spacing} from '../constants';

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
};

const CustomButton = ({title, onPress, style, loading, disabled}: Props) => {
  return (
    <TouchableOpacity
      style={[disabled ? styles.disableButton : styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: 120,
  },
  disableButton: {
    backgroundColor: colors.inputBorder,
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: 120,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CustomButton;
