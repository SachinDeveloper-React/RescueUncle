import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, typography} from '../../constants';
import {useDetailsForm, useFormManager, useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton} from '../../components';
import {goBack} from '../../navigation';
import {BackArrowIcon} from '../../assets';
import {useDetailsFormStore} from '../../store';
import {personalInfoSchema} from '../../validations';

const PersonalInformationScreen = () => {
  const {scale, scaleFont} = useResponsiveScale();
  const {personalDetails} = useDetailsFormStore();
  const {state, updateProfileDetail} = useDetailsForm();
  const {form, errors, inputRefs, handleChange, focusNext, handleSubmit} =
    useFormManager({
      initialForm: personalDetails,
      schema: personalInfoSchema,
      onSubmit: async data => {
        await updateProfileDetail(data);
      },
    });

  const fields = useMemo(
    () => ({
      full_name: 'Full Name',
      gender: 'Gender',
      emergency_name_1: 'Emergency Contact Name',
      emergency_contact_1: 'Emergency Contact Number',
      emergency_name_2: 'Secondary Emergency Contact Name (Optional)',
      emergency_contact_2: 'Secondary Emergency Contact Number (Optional)',
      blood_group: 'Blood Group',
    }),
    [],
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AuthLayout>
        <View style={[styles.formContainer, {paddingHorizontal: scale(16)}]}>
          <TouchableOpacity onPress={goBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={[typography.heading, {fontSize: scaleFont(22)}]}>
            Personal Information
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

          <CustomButton
            title="Submit"
            onPress={handleSubmit}
            loading={state.profileUpdate.loading}
            disabled={state.profileUpdate.loading}
          />
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
