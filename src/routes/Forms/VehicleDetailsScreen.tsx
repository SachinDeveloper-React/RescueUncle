import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, typography} from '../../constants';
import {useDetailsForm, useFormManager, useResponsiveScale} from '../../hooks';
import {AuthLayout} from '../../layout';
import {CustomButton, CustomTextInput} from '../../components';
import {BackArrowIcon} from '../../assets';
import {goBack} from '../../navigation';
import {useDetailsFormStore} from '../../store';
import {vehicleInfoSchema} from '../../validations';

const VehicleDetailsScreen = () => {
  const {scale, scaleFont} = useResponsiveScale();
  const {state, updateVehicleDetail} = useDetailsForm();
  const {vehicleDetails} = useDetailsFormStore();

  const {form, errors, inputRefs, handleChange, focusNext, handleSubmit} =
    useFormManager({
      initialForm: vehicleDetails,
      schema: vehicleInfoSchema,
      onSubmit: async data => {
        await updateVehicleDetail({
          Chassis_number: data.Chassis_number,
          engine_number: data.engine_number,
          owner_name: data.owner_name,
          vehicle_name: data.vehicle_name,
          vehicle_registration_number: data.vehicle_registration_number,
        });
      },
    });

  const fields = useMemo(
    () => ({
      vehicle_registration_number: 'Registration Number',
      Chassis_number: 'Chassis Number',
      engine_number: 'Engine Number',
      owner_name: 'Owner Name',
      vehicle_name: 'Vehicle Name',
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
              {fontSize: scaleFont(14), color: colors.textPrimary},
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

          <CustomButton
            title="Submit"
            loading={state.vehicleUpdate.loading}
            disabled={state.vehicleUpdate.loading}
            onPress={handleSubmit}
          />
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
