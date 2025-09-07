import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants';
import CustomButton from '../../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {useResponsiveScale, useUploadMediaService} from '../../hooks';

const OtpVerificationScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'OtpVerification'>) => {
  const {description} = route.params;
  const {
    handleChange,
    inputs,
    otp,
    phone,
    updateServiceDevicePickupCustomerMedia,
    loading,
  } = useUploadMediaService(description);

  const {scale, verticalScale, moderateScale, scaleFont} = useResponsiveScale();
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={[styles.container, {}]}>
      <View
        style={[
          styles.wrapper,
          {paddingHorizontal: scale(16), marginTop: verticalScale(20)},
        ]}>
        <Text
          style={[
            styles.title,
            {fontSize: scaleFont(24), marginBottom: verticalScale(16)},
          ]}>
          Enter OTP to verify
        </Text>

        <Text
          style={[
            styles.subtitle,
            {fontSize: scaleFont(14), marginBottom: verticalScale(20)},
          ]}>
          A 6-digit OTP has been sent to your phone number{' '}
          <Text style={styles.phone}>+{phone} </Text>
          {/* <Text style={styles.change}>change</Text> */}
        </Text>

        <View style={[styles.otpContainer, {marginBottom: verticalScale(24)}]}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.otpInput,
                {
                  width: scale(48),
                  height: verticalScale(58),
                  fontSize: scaleFont(18),
                  borderRadius: scale(8),
                },
              ]}
              keyboardType="number-pad"
              maxLength={1}
              ref={ref => (inputs.current[index] = ref! as any)}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              value={digit}
              autoFocus={index === 0}
              textAlign="center"
              returnKeyType="done"
              inputMode="numeric"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
            />
          ))}
        </View>

        <TouchableOpacity style={styles.resendContainer}>
          <Text style={[styles.resendText, {fontSize: scaleFont(13)}]}>
            Didn't receive OTP?{' '}
          </Text>
          <Text style={[styles.resendLink, {fontSize: scaleFont(13)}]}>
            Resend
          </Text>
        </TouchableOpacity>

        <CustomButton
          title="Verify OTP"
          loading={loading}
          disabled={otp.length === 5 || loading}
          onPress={updateServiceDevicePickupCustomerMedia}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontWeight: '400',
    color: colors.textPrimary,
  },
  phone: {
    fontWeight: '600',
    color: colors.textPrimary,
  },
  change: {
    color: colors.primary,
    fontWeight: '500',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    color: colors.black,
    fontWeight: '700',
    backgroundColor: colors.inputBackground,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resendText: {
    color: colors.textPrimary,
  },
  resendLink: {
    color: colors.primary,
    fontWeight: '500',
  },
});
