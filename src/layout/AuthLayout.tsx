import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {height} = Dimensions.get('window');

type Props = KeyboardAvoidingViewProps & {
  children: React.ReactNode;
};

const AuthLayout = ({children, ...props}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      {...props}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  flex: {flex: 1},
  scrollContainer: {
    paddingBottom: height * 0.1,
    flexGrow: 1,
  },
});
