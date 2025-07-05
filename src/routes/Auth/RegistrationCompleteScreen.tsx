import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from '../../constants';
import {RegistrationImage, RightIcon} from '../../assets';
import {AuthStackParamList, navigate} from '../../navigation';
import {useDetailsForm, useResponsiveScale} from '../../hooks';

const formSections = [
  {labal: 'Personal Information', navigate: 'PersonalInformation'},
  {labal: 'Vehicle Details', navigate: 'VehicleDetails'},
  {labal: 'Bank Account Details', navigate: 'BankAccountDetails'},
];

const RegistrationCompleteScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'RegistrationComplete'>) => {
  const {scale, verticalScale, scaleFont} = useResponsiveScale();
  const {fetchProfileDetails, fetchVehicleDetails, fetchBankDetails} =
    useDetailsForm();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigate('Main')}>
            <Text
              style={{
                fontSize: scaleFont(16),
                fontWeight: '500',
                color: 'blue',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      await Promise.all([
        fetchProfileDetails(),
        fetchVehicleDetails(),
        fetchBankDetails(),
      ]);
    })();
  }, []);
  return (
    <SafeAreaView style={[styles.container, {}]}>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.banner,
            {
              paddingTop: verticalScale(12),
              paddingHorizontal: scale(16),
            },
          ]}>
          <View style={[styles.bannerTextContainer, {gap: verticalScale(4)}]}>
            <Text style={[styles.bannerTitle, {fontSize: scaleFont(20)}]}>
              Your application is under Verification
            </Text>
            <Text style={[styles.bannerSubtitle, {fontSize: scaleFont(14)}]}>
              Account will get activated in 48hrs
            </Text>
          </View>

          <View
            style={[
              styles.imageContainer,
              {
                width: scale(100),
                height: verticalScale(100),
              },
            ]}>
            <RegistrationImage width="100%" height="100%" />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{paddingBottom: verticalScale(24)}}
          showsVerticalScrollIndicator={false}>
          {formSections.map((section, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(section.navigate as any)}
              style={[
                styles.cardContainer,
                {
                  height: verticalScale(65),
                  margin: scale(10),
                  padding: scale(10),
                  borderRadius: scale(10),
                  gap: verticalScale(4),
                },
              ]}
              key={index}>
              <View style={styles.row}>
                <Text style={[styles.title, {fontSize: scaleFont(16)}]}>
                  {section.labal}
                </Text>
                <RightIcon />
              </View>
              <Text style={[styles.status, {fontSize: scaleFont(14)}]}>
                In complete
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text
          style={[
            styles.footerText,
            {
              marginBottom: verticalScale(16),
              fontSize: scaleFont(13),
            },
          ]}>
          Need Help? <Text style={styles.footerLink}>Contact Us</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  banner: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  bannerTitle: {
    fontWeight: 'bold',
    color: colors.white,
  },
  bannerSubtitle: {
    fontWeight: '400',
    color: colors.white,
  },
  imageContainer: {
    overflow: 'hidden',
  },
  cardContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    color: colors.textPrimary,
  },
  status: {
    fontWeight: '500',
    color: '#34A853',
  },
  footerText: {
    textAlign: 'center',
    color: colors.textPrimary,
  },
  footerLink: {
    color: colors.primary,
    fontWeight: '500',
  },
});
