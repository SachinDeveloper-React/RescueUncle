import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
  Alert,
} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, typography} from '../../constants';
import {useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {launchImageLibrary} from 'react-native-image-picker';
import {CustomButton, CustomUploadPhotoSection} from '../../components';
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
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    fullName: '',
    gender: '',
    primaryMobile: '',
    emergencyName: '',
    emergencyMobile: '',
    secondaryEmergencyName: '',
    secondaryEmergencyMobile: '',
    bloodGroup: '',
  });

  const handleImagePick = async () => {
    const result = await launchImageLibrary({mediaType: 'photo', quality: 0.5});
    if (result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri || null);
    }
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleSubmit = () => {
    const {error} = personalInfoSchema.validate(form, {abortEarly: false});
    if (error) {
      const errorObj: Record<string, string> = {};
      error.details.forEach(detail => {
        const key = detail.path[0] as string;
        errorObj[key] = detail.message;
      });
      setErrors(errorObj);
      return;
    }

    setErrors({});
    Alert.alert('Success', 'Form submitted successfully!');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AuthLayout keyboardVerticalOffset={0}>
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

          {Object.entries({
            fullName: 'Full Name',
            gender: 'Gender',
            primaryMobile: 'Primary Mobile Number',
            emergencyName: 'Emergency Contact Name',
            emergencyMobile: 'Emergency Contact Number',
            secondaryEmergencyName:
              'Secondary Emergency Contact Name (Optional)',
            secondaryEmergencyMobile:
              'Secondary Emergency Contact Number (Optional)',
            bloodGroup: 'Blood Group',
          }).map(([key, label]) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              <CustomTextInput
                placeholder={label}
                value={form[key as keyof typeof form]}
                onChangeText={text => handleChange(key, text)}
                keyboardType={
                  key.toLowerCase().includes('mobile') ? 'phone-pad' : 'default'
                }
                maxLength={
                  key.toLowerCase().includes('mobile') ? 10 : undefined
                }
                accessibilityLabel={label}
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
