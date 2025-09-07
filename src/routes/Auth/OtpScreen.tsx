import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from '../../constants';
import {CustomButton} from '../../components';
import {AuthStackParamList, goBack} from '../../navigation';
import {useAuth, useResponsiveScale} from '../../hooks';

const OtpScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<AuthStackParamList, 'Otp'>) => {
  const {user_mobile} = route.params;
  const {scale, verticalScale, scaleFont} = useResponsiveScale();
  const {
    handleOtpChange,
    handleKeyPress,
    inputs,
    auth,
    handleValidateOtp,
    error,
    loading,
  } = useAuth();

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
        <View>
          <Text style={[styles.subtitle, {fontSize: scaleFont(14)}]}>
            A 6-digit OTP has been sent to your phone number
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: verticalScale(10),
            }}>
            <Text style={styles.phone}>+91 {user_mobile} </Text>
            <Pressable onPress={goBack}>
              <Text style={styles.change}>change?</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.otpContainer, {marginBottom: verticalScale(24)}]}>
          {auth.mobile_otp.map((digit, index) => (
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
              onChangeText={text => handleOtpChange(text, index)}
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
          onPress={handleValidateOtp}
          loading={loading.otp}
          disabled={auth.mobile_otp.some(digit => digit.trim() === '')}
        />

        <Text style={{textAlign: 'center', color: 'red', marginTop: 20}}>
          {error.otp}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

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
