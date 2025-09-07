import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {typography} from '../../constants';
import {useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton} from '../../components';
import {BackArrowIcon} from '../../assets';
import {goBack} from '../../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const emergencyDetailsSchema = Joi.object({
  fullName: Joi.string().required().label('Full Name'),
  relationship: Joi.string().required().label('Relationship'),
  mobileNumber: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .label('Mobile Number'),
  alternateContact: Joi.string()
    .pattern(/^\d{10}$/)
    .optional()
    .allow('')
    .label('Alternate Contact'),
  address: Joi.string().required().label('Address'),
  bloodGroup: Joi.string()
    .pattern(/^(A|B|AB|O)[+-]$/)
    .required()
    .label('Blood Group'),
});

const EmergencyDetailsScreen = () => {
  const {scale, scaleFont} = useResponsiveScale();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    fullName: '',
    relationship: '',
    mobileNumber: '',
    alternateContact: '',
    address: '',
    bloodGroup: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleSubmit = () => {
    const {error} = emergencyDetailsSchema.validate(form, {abortEarly: false});
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
    Alert.alert('Success', 'Emergency details submitted successfully!');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AuthLayout>
        <View style={[styles.formContainer, {paddingHorizontal: scale(16)}]}>
          <TouchableOpacity onPress={goBack}>
            <BackArrowIcon />
          </TouchableOpacity>

          <Text style={[typography.heading, {fontSize: scaleFont(22)}]}>
            Emergency Details
          </Text>
          <Text
            style={[
              typography.body,
              {fontSize: scaleFont(14), color: '#57585A'},
            ]}>
            Please enter emergency contact information
          </Text>

          {Object.entries({
            fullName: 'Full Name',
            relationship: 'Relationship',
            mobileNumber: 'Mobile Number',
            alternateContact: 'Alternate Contact (Optional)',
            address: 'Address',
            bloodGroup: 'Blood Group (e.g., O+)',
          }).map(([key, label]) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              <CustomTextInput
                placeholder={label}
                value={form[key as keyof typeof form]}
                onChangeText={text => handleChange(key, text)}
                keyboardType={
                  key.includes('Number') || key.includes('Contact')
                    ? 'phone-pad'
                    : 'default'
                }
                autoCapitalize={key === 'bloodGroup' ? 'characters' : 'none'}
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

export default EmergencyDetailsScreen;

const styles = StyleSheet.create({
  formContainer: {
    gap: 12,
    marginTop: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
