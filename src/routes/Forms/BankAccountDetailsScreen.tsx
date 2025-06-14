import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, typography} from '../../constants';
import {useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton} from '../../components';
import {BackArrowIcon} from '../../assets';
import {goBack} from '../../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const bankAccountSchema = Joi.object({
  bankName: Joi.string().required().label('Bank Name'),
  accountNumber: Joi.string()
    .pattern(/^\d+$/)
    .min(9)
    .max(18)
    .required()
    .label('Account Number'),
  ifscCode: Joi.string()
    .pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    .required()
    .label('IFSC Code'),
});

const BankAccountDetailsScreen = () => {
  const {scale, scaleFont} = useResponsiveScale();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleSubmit = () => {
    const {error} = bankAccountSchema.validate(form, {abortEarly: false});
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
    Alert.alert('Success', 'Bank account details submitted successfully!');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AuthLayout keyboardVerticalOffset={0}>
        <View style={[styles.formContainer, {paddingHorizontal: scale(16)}]}>
          <TouchableOpacity onPress={goBack}>
            <BackArrowIcon />
          </TouchableOpacity>

          <Text style={[typography.heading, {fontSize: scaleFont(22)}]}>
            Bank Account Details
          </Text>
          <Text
            style={[
              typography.body,
              {fontSize: scaleFont(14), color: '#57585A'},
            ]}>
            Please enter your account details carefully
          </Text>

          {Object.entries({
            bankName: 'Bank Name',
            accountNumber: 'Account Number',
            ifscCode: 'IFSC Code',
          }).map(([key, label]) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              <CustomTextInput
                placeholder={label}
                value={form[key as keyof typeof form]}
                onChangeText={text => handleChange(key, text)}
                keyboardType={
                  key === 'accountNumber' ? 'number-pad' : 'default'
                }
                autoCapitalize={key === 'ifscCode' ? 'characters' : 'none'}
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

export default BankAccountDetailsScreen;

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
