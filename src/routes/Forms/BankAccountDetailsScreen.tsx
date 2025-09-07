import React, {useMemo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {typography} from '../../constants';
import {useDetailsForm, useFormManager, useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton, CustomTextInput} from '../../components';
import {BackArrowIcon} from '../../assets';
import {goBack} from '../../navigation';
import {useDetailsFormStore} from '../../store';
import {bankAccountSchema} from '../../validations';

const BankAccountDetailsScreen = () => {
  const {scale, scaleFont} = useResponsiveScale();
  const {bankDetails} = useDetailsFormStore();
  const {state, updateBankDetail} = useDetailsForm();
  const {
    form,
    errors,
    inputRefs,
    handleChange,
    handleSubmit,
    focusNext,
    serverError,
  } = useFormManager({
    initialForm: bankDetails,
    schema: bankAccountSchema,
    onSubmit: async data => {
      await updateBankDetail({
        bank_name: data.bank_name,
        account_number: data.account_number,
        ifsc_code: data.ifsc_code,
        account_holder_name: data.account_holder_name,
        is_active: false,
      });
    },
  });

  const fields = useMemo(
    () => ({
      bank_name: 'Bank Name',
      account_number: 'Account Number',
      ifsc_code: 'IFSC Code',
      account_holder_name: 'Account Holder Name',
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

          <CustomButton
            title="Submit"
            onPress={handleSubmit}
            loading={state.bankUpdate.loading}
            disabled={state.bankUpdate.loading}
          />
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
