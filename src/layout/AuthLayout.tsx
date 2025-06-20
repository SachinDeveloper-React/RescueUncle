import React from 'react';
import {
  KeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = KeyboardAvoidingViewProps & {
  children: React.ReactNode;
};

const AuthLayout = ({children, ...props}: Props) => {
  return (
    <KeyboardAwareScrollView
      {...props}
      style={styles.wrapper}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={Platform.OS === 'ios' ? 20 : 200}
      keyboardShouldPersistTaps="handled">
      <View>{children}</View>
    </KeyboardAwareScrollView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    // padding: 16,
    // paddingBottom: 60,
  },
});
