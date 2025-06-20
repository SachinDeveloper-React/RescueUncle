import React, {forwardRef} from 'react';
import {Platform, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors, spacing} from '../constants';

const CustomTextInput = forwardRef<TextInput, TextInputProps>((props, ref) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.inputBorder}
      {...props}
    />
  );
});

CustomTextInput.displayName = 'CustomTextInput';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    width: '100%',
    height: Platform.OS === 'ios' ? 48 : 50,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.inputBackground,
    fontSize: 16,
    color: colors.black,
  },
});

export default React.memo(CustomTextInput);
