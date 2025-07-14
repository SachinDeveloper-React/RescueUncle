import React, {useEffect} from 'react';
import {
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
import {AuthStackParamList} from '../../navigation';
import {useDetailsForm, useResponsiveScale} from '../../hooks';
import {useAuthStore} from '../../store';
import {showMessage} from '../../utils';
import {CustomButton, CustomLoading} from '../../components';

const formSections = [
  {labal: 'Personal Information', navigate: 'PersonalInformation'},
  {labal: 'Vehicle Details', navigate: 'VehicleDetails'},
  {labal: 'Bank Account Details', navigate: 'BankAccountDetails'},
];

const RegistrationCompleteScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'RegistrationComplete'>) => {
  const {scale, verticalScale, scaleFont} = useResponsiveScale();
  const {profileComplete} = useAuthStore();
  const {
    getAllLoading,
    bankDetails,
    personalDetails,
    vehicleDetails,
    getProfileValidation,
  } = useDetailsForm();

  const {logout} = useAuthStore.getState();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={logout}>
            <Text
              style={{
                fontSize: scaleFont(16),
                fontWeight: '500',
                color: 'blue',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  useEffect(() => {
    getProfileValidation();
  }, []);

  if (getAllLoading) {
    return <CustomLoading />;
  }

  const getStatusLabel = (sectionIndex: number): string => {
    switch (sectionIndex) {
      case 0:
        return personalDetails.profile_status ? 'In Complete' : 'Not Complete';
      case 1:
        return vehicleDetails.is_active ? 'In Complete' : 'Not Complete';
      case 2:
        return bankDetails.is_active ? 'In Complete' : 'Not Complete';
      default:
        return 'Not Available';
    }
  };
  const getStatusColor = (sectionIndex: number): string => {
    switch (sectionIndex) {
      case 0:
        return personalDetails.profile_status ? '#34A853' : 'red';
      case 1:
        return vehicleDetails.is_active ? '#34A853' : 'red';
      case 2:
        return bankDetails.is_active ? '#34A853' : 'red';
      default:
        return 'Not Available';
    }
  };

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
              <Text
                style={[
                  styles.status,
                  {fontSize: scaleFont(14), color: getStatusColor(index)},
                ]}>
                {getStatusLabel(index)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            paddingHorizontal: verticalScale(8),
            marginBottom: verticalScale(16),
          }}>
          <CustomButton
            title="Submit"
            disabled={
              !bankDetails.is_active &&
              !personalDetails.profile_status &&
              !vehicleDetails.is_active
            }
            onPress={() => {
              if (
                bankDetails.is_active &&
                personalDetails.profile_status &&
                vehicleDetails.is_active
              ) {
                profileComplete(true);
              } else {
                showMessage('Please complete all sections before proceeding.');
              }
            }}
          />
        </View>
        <Text
          style={[
            styles.footerText,
            {
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
