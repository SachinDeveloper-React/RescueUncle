import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale, verticalScale} from 'react-native-size-matters';
import {GiftIcon, InviteIcon, ReferalCodeIcon} from '../../assets';
import Clipboard from '@react-native-clipboard/clipboard';
import {showMessage} from '../../utils';
import {colors} from '../../constants';

const ReferAndEarnScreen: React.FC = () => {
  const handleCopy = () => {
    const referralCode = 'LOREM2331';
    Clipboard.setString(referralCode);
    showMessage('Referral code copied!');
  };
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={{paddingBottom: verticalScale(30)}}>
      <LinearGradient
        colors={[colors.primary, colors.lightPrimary]}
        style={styles.gradientContainer}>
        <View style={styles.headerContent}>
          <View style={styles.textSection}>
            <Text style={styles.title}>Refer & Earn</Text>
            <Text style={styles.subtitle}>
              Upto <Text style={styles.subtitleBold}>₹100</Text>
            </Text>
            <Text style={styles.description}>
              Invite your friends to use EatFit Partner App & get Rs. 75 when
              your friend uses your referral code and completes a successful
              delivery.
            </Text>
          </View>
          <View style={styles.imageSection}>
            <Image
              source={require('../../assets/referandearn.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
      </LinearGradient>

      <TouchableOpacity style={styles.referButton}>
        <Text style={styles.referButtonText}>Refer Now</Text>
      </TouchableOpacity>

      <View style={styles.stepsContainer}>
        <ReferStep icon={<InviteIcon />} text="Invite your friends to EatFit" />
        <ReferStep
          icon={<ReferalCodeIcon />}
          text="Your friend uses your referral code"
        />
        <ReferStep icon={<GiftIcon />} text="You get Rs. 75 in your wallet" />
      </View>

      <TouchableOpacity onPress={handleCopy} style={styles.codeContainer}>
        <View style={styles.codeBox}>
          <Text style={styles.codeLabel}>Your referral code</Text>
          <Text style={styles.codeText}>LOREM2331</Text>
        </View>
        <View style={styles.copyBox}>
          <Text style={styles.copyText}>{`Copy\nCode`}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const ReferStep = ({icon, text}: {icon: React.ReactNode; text: string}) => (
  <View style={styles.step}>
    {icon}
    <Text style={styles.stepText}>{text}</Text>
  </View>
);

export default ReferAndEarnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientContainer: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: scale(60),
    borderBottomRightRadius: scale(60),
    overflow: 'hidden',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(16),
    paddingBottom: verticalScale(52),
  },
  textSection: {
    flex: 1,
    gap: verticalScale(10),
  },
  title: {
    fontSize: scale(26),
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: scale(16),
    fontWeight: '400',
    color: '#ffffff',
  },
  subtitleBold: {
    fontWeight: '700',
  },
  description: {
    fontSize: scale(14),
    fontWeight: '400',
    color: '#ffffff',
  },
  imageSection: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  referButton: {
    backgroundColor: colors.textPrimary,
    height: verticalScale(52),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(60),
    borderRadius: scale(12),
    marginTop: -verticalScale(26),
  },
  referButtonText: {
    fontSize: scale(20),
    fontWeight: '600',
    color: '#fff',
  },
  stepsContainer: {
    alignSelf: 'center',
    marginTop: verticalScale(20),
    gap: verticalScale(20),
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  stepText: {
    fontSize: scale(16),
    fontWeight: '400',
    color: colors.textPrimary,
  },
  codeContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: scale(60),
    backgroundColor: colors.lightPrimary,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: scale(8),
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: scale(10),
  },
  codeBox: {
    alignItems: 'center',
  },
  codeLabel: {
    color: colors.textPrimary,
    fontSize: scale(16),
    fontWeight: '400',
  },
  codeText: {
    color: colors.primary,
    fontSize: scale(24),
    fontWeight: '600',
  },
  copyBox: {
    borderLeftWidth: 1,
    paddingLeft: scale(20),
    justifyContent: 'center',
  },
  copyText: {
    color: colors.textPrimary,
    fontSize: scale(18),
    fontWeight: '500',
    textAlign: 'center',
  },
});
