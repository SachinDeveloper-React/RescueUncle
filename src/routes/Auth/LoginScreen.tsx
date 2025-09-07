import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import {AuthLayout} from '../../layout';
import {colors, typography} from '../../constants';
import {CustomTextInput, CustomButton} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation';
import {useAuth, useResponsiveScale} from '../../hooks';
import {useHeaderHeight} from '@react-navigation/elements';
import {Bg, LoginVector} from '../../assets';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Login'>) => {
  const {top} = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const {
    moderateScale,
    verticalScale,
    scale,
    scaleFont,
    windowWidth,
    windowHeight,
  } = useResponsiveScale();
  const {auth, handleChange, handleSendOtp, loading, error} = useAuth();

  return (
    <AuthLayout extraScrollHeight={headerHeight}>
      <View style={styles.bgContainer}>
        <Bg width={windowWidth} height={windowHeight * 0.6} />
        <View
          style={[
            styles.vectorWrapper,
            {
              top: top,
              paddingHorizontal: scale(30),
              width: windowWidth,
              height: windowHeight * 0.5,
            },
          ]}>
          <View style={{alignItems: 'center'}}>
            <LoginVector
              width={windowWidth * 0.8}
              height={windowHeight * 0.3}
            />
          </View>
          <Text
            style={[
              typography.subHeading,
              {
                marginTop: verticalScale(12),
                fontSize: scaleFont(16),
              },
            ]}>
            Be a EatFit Partner
          </Text>
          <Text
            style={[
              typography.heading,
              {
                marginTop: verticalScale(6),
                fontSize: scaleFont(20),
              },
            ]}>{`Get a stable monthly\nincome`}</Text>
        </View>
      </View>

      <View
        style={[
          styles.formContainer,
          {
            paddingHorizontal: scale(30),
            marginTop: verticalScale(20),
          },
        ]}>
        <Text style={[typography.body, {fontSize: scaleFont(14)}]}>
          Enter Mobile Number
        </Text>

        <CustomTextInput
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          maxLength={10}
          value={auth.user_mobile.toString()}
          onChangeText={text => handleChange('user_mobile', text)}
          error={error.login}
        />

        <Text style={[styles.terms, {fontSize: scaleFont(12)}]}>
          By signing up I agree to the{' '}
          <Text style={styles.link}>Terms of use</Text> and{' '}
          <Text style={styles.link}>Privacy Policy.</Text>
        </Text>

        <CustomButton
          title="Send OTP"
          onPress={handleSendOtp}
          loading={loading.login}
        />
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bgContainer: {
    position: 'relative',
  },
  vectorWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    gap: 16,
  },
  terms: {
    color: colors.textPrimary,
  },
  link: {
    color: colors.primary,
  },
});
