import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Alert,
} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, typography} from '../../constants';
import {useFormManager, useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton} from '../../components';
import {goBack} from '../../navigation';
import {BackArrowIcon} from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';

const personalInfoSchema = Joi.object({
  fullName: Joi.string().min(2).required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  primaryMobile: Joi.string().length(10).pattern(/^\d+$/).required(),
  emergencyName: Joi.string().min(2).required(),
  emergencyMobile: Joi.string().length(10).pattern(/^\d+$/).required(),
  secondaryEmergencyName: Joi.string().allow('').optional(),
  secondaryEmergencyMobile: Joi.string()
    .length(10)
    .pattern(/^\d+$/)
    .allow('')
    .optional(),
  bloodGroup: Joi.string().required(),
});

const PersonalInformationScreen = () => {
  const {scale, verticalScale, scaleFont} = useResponsiveScale();

  const {form, errors, inputRefs, handleChange, focusNext, handleSubmit} =
    useFormManager({
      initialForm: {
        fullName: '',
        gender: '',
        primaryMobile: '',
        emergencyName: '',
        emergencyMobile: '',
        secondaryEmergencyName: '',
        secondaryEmergencyMobile: '',
        bloodGroup: '',
      },
      schema: personalInfoSchema,
      onSubmit: async data => {
        // Simulated submit logic
        console.log('Personal info submitted:', data);
        Alert.alert('Success', 'Form submitted successfully!');
      },
    });

  const fields = useMemo(
    () => ({
      fullName: 'Full Name',
      gender: 'Gender',
      primaryMobile: 'Primary Mobile Number',
      emergencyName: 'Emergency Contact Name',
      emergencyMobile: 'Emergency Contact Number',
      secondaryEmergencyName: 'Secondary Emergency Contact Name (Optional)',
      secondaryEmergencyMobile: 'Secondary Emergency Contact Number (Optional)',
      bloodGroup: 'Blood Group',
    }),
    [],
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AuthLayout keyboardVerticalOffset={0}>
        <View style={[styles.formContainer, {paddingHorizontal: scale(16)}]}>
          <TouchableOpacity onPress={goBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={[typography.heading, {fontSize: scaleFont(22)}]}>
            Edit Personal Information
          </Text>
          <Text
            style={[
              typography.body,
              {fontSize: scaleFont(14), color: '#57585A'},
            ]}>
            Enter the details below so we can get to know and serve you better
          </Text>

          {Object.entries(fields).map(([key, label], index) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              <CustomTextInput
                ref={inputRefs[key]}
                placeholder={label}
                value={form[key]}
                onChangeText={text => handleChange(key, text)}
                keyboardType={
                  key.toLowerCase().includes('mobile') ? 'phone-pad' : 'default'
                }
                maxLength={
                  key.toLowerCase().includes('mobile') ? 10 : undefined
                }
                accessibilityLabel={label}
                returnKeyType={key === 'bloodGroup' ? 'done' : 'next'}
                onSubmitEditing={() => focusNext(key)}
              />
              {errors[key] && (
                <Text style={styles.errorText}>{errors[key]}</Text>
              )}
            </View>
          ))}

          <CustomButton title="Submit" onPress={handleSubmit} />
        </View>
      </AuthLayout>
    </SafeAreaView>
  );
};

export default PersonalInformationScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    // paddingBottom: 40,
  },
  formContainer: {
    gap: 12,
    marginTop: 16,
  },
  label: {
    color: colors.textPrimary,
    marginTop: 10,
    fontWeight: '500',
  },
  uploadBtn: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1 * PixelRatio.get(),
    borderColor: colors.inputBorder,
    borderStyle: 'dotted',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  submitBtn: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
