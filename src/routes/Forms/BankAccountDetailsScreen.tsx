import React, {useMemo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {typography} from '../../constants';
import {useFormManager, useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton} from '../../components';
import {BackArrowIcon} from '../../assets';
import {goBack} from '../../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-simple-toast';

const bankAccountSchema = Joi.object({
  bankName: Joi.string().required().label('Bank Name'),
  accountNumber: Joi.string()
    .pattern(/^\d+$/)
    .min(9)
    .max(18)
    .required()
    .label('Account Number'),
  ifscCode: Joi.string()
    // .pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    .required()
    .label('IFSC Code'),
});

const BankAccountDetailsScreen = () => {
  const {scale, scaleFont} = useResponsiveScale();
  const {
    form,
    errors,
    inputRefs,
    handleChange,
    handleSubmit,
    focusNext,
    serverError,
  } = useFormManager({
    initialForm: {
      bankName: '',
      accountNumber: '',
      ifscCode: '',
    },
    schema: bankAccountSchema,
    onSubmit: async data => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Submitted Data:', data);
      } catch (error) {
        console.log('error', error);
        // Alert.alert('Error', 'Something went wrong during submission.');
        Toast.showWithGravity(
          'This is a long toast at the top.',
          Toast.LONG,
          Toast.TOP,
        );
      }
    },
  });

  const fields = useMemo(
    () => ({
      bankName: 'Bank Name',
      accountNumber: 'Account Number',
      ifscCode: 'IFSC Code',
    }),
    [],
  );

  console.log('serverError', serverError);

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

          {Object.entries(fields).map(([key, label]) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              <CustomTextInput
                ref={inputRefs[key]}
                placeholder={label}
                value={form[key]}
                onChangeText={text => handleChange(key, text)}
                keyboardType={
                  key === 'accountNumber' ? 'number-pad' : 'default'
                }
                autoCapitalize={key === 'ifscCode' ? 'characters' : 'none'}
                accessibilityLabel={label}
                returnKeyType={key === 'ifscCode' ? 'done' : 'next'}
                onSubmitEditing={() => focusNext(key)}
              />

              {errors[key] && (
                <Text style={styles.errorText}>{errors[key]}</Text>
              )}
            </View>
          ))}

          {serverError && (
            <Text style={styles.serverErrorText}>{serverError}</Text>
          )}

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
  serverErrorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    textAlign: 'center',
  },
});
