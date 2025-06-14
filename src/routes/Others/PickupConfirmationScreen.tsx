import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ConfirmIcon} from '../../assets';
import {colors, spacing, typography} from '../../constants';
import {RootStackParamList} from '../../navigation'; // optional if needed
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';

const PickupConfirmationScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'PickupConfirmation'>) => {
  const handleDone = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Main',
            state: {
              routes: [{name: 'Orders'}],
            },
          },
        ],
      }),
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ConfirmIcon />
        <Text style={styles.title}>Device Pick/Drop Successfully</Text>
        <TouchableOpacity style={styles.button} onPress={handleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PickupConfirmationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('screen').width * 0.2,
    gap: spacing.lg,
  },
  title: {
    fontSize: typography.body.fontSize,
    fontWeight: 'bold',
    color: colors.textPrimary,
    lineHeight: 30,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 120,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: typography.body.fontSize,
  },
});
