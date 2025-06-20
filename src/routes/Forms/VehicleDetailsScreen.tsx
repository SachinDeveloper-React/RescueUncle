import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import Joi from 'joi';
import CustomTextInput from '../../components/CustomTextInput';
import {colors, typography} from '../../constants';
import {useFormManager, useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
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
  const {form, errors, inputRefs, handleChange, focusNext, handleSubmit} =
    useFormManager({
      initialForm: {
        registrationNumber: '',
        chassisNumber: '',
        engineNumber: '',
        ownerName: '',
        vehicleName: '',
      },
      schema: vehicleInfoSchema,
      onSubmit: async data => {
        // You can add an API call here:
        // await api.submitVehicleDetails(data);
        console.log('Form data:', data);
      },
    });

  const fields = useMemo(
    () => ({
      registrationNumber: 'Registration Number',
      chassisNumber: 'Chassis Number',
      engineNumber: 'Engine Number',
      ownerName: 'Owner Name',
      vehicleName: 'Vehicle Name',
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
            Vehicle Details
          </Text>
          <Text
            style={[
              typography.body,
              {fontSize: scaleFont(14), color: '#57585A'},
            ]}>
            Enter the details below so we can get to know and serve you better
          </Text>

          {Object.entries(fields).map(([key, label]) => (
            <View key={key} style={{marginBottom: 12}}>
              <Text style={{marginBottom: 6}}>{label}</Text>
              {inputRefs[key] && (
                <CustomTextInput
                  ref={inputRefs[key]}
                  placeholder={label}
                  value={form[key as keyof typeof form]}
                  onChangeText={text => handleChange(key, text)}
                  keyboardType="default"
                  accessibilityLabel={label}
                  returnKeyType={key === 'vehicleName' ? 'done' : 'next'}
                  onSubmitEditing={() => focusNext(key)}
                />
              )}

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
