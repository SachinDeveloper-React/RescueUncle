import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
  Alert,
} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, typography} from '../../constants';
import {useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {launchImageLibrary} from 'react-native-image-picker';
import {CustomButton} from '../../components';
import {BackArrowIcon} from '../../assets';
import {goBack} from '../../navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const vehicleInfoSchema = Joi.object({
  registrationNumber: Joi.string().required().label('Registration Number'),
  chassisNumber: Joi.string().required().label('Chassis Number'),
  engineNumber: Joi.string().required().label('Engine Number'),
  ownerName: Joi.string().required().label('Owner Name'),
  vehicleName: Joi.string().required().label('Vehicle Name'),
});

const VehicleDetailsScreen = () => {
  const {scale, verticalScale, scaleFont} = useResponsiveScale();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    registrationNumber: '',
    chassisNumber: '',
    engineNumber: '',
    ownerName: '',
    vehicleName: '',
  });

  const handleImagePick = async () => {
    const result = await launchImageLibrary({mediaType: 'photo', quality: 0.5});
    if (result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri || null);
    }
  };

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleSubmit = () => {
    const {error} = vehicleInfoSchema.validate(form, {abortEarly: false});
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
    Alert.alert('Success', 'Vehicle details submitted successfully!');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AuthLayout keyboardVerticalOffset={0}>
        <View style={[styles.formContainer, {paddingHorizontal: scale(16)}]}>
          <TouchableOpacity onPress={goBack}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={[typography.heading, {fontSize: scaleFont(22)}]}>
            Vehicle Details
          </Text>
          <Text
            style={[
              typography.body,
              {fontSize: scaleFont(14), color: '#57585A'},
            ]}>
            Enter the details below so we can get to know and serve you better
          </Text>

          {Object.entries({
            registrationNumber: 'Registration Number',
            chassisNumber: 'Chassis Number',
            engineNumber: 'Engine Number',
            ownerName: 'Owner Name',
            vehicleName: 'Vehicle Name',
          }).map(([key, label]) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              <CustomTextInput
                placeholder={label}
                value={form[key as keyof typeof form]}
                onChangeText={text => handleChange(key, text)}
                keyboardType="default"
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

export default VehicleDetailsScreen;

const styles = StyleSheet.create({
  formContainer: {
    gap: 12,
    marginTop: 16,
  },
  label: {
    color: colors.textPrimary,
    marginTop: 10,
    fontWeight: '500',
  },
  uploadBtn: {
    backgroundColor: colors.inputBackground,
    borderWidth: 1 * PixelRatio.get(),
    borderColor: colors.inputBorder,
    borderStyle: 'dotted',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
