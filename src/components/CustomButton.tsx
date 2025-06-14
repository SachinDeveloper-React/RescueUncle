import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors, spacing} from '../constants';

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const CustomButton = ({title, onPress, style}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
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
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CustomButton;
