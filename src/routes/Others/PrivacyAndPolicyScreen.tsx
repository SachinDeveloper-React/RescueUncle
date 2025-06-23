import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {colors} from '../../constants';

const htmlContent = `
  <h1 style="font-weight:bold">Privacy & Policy</h1>
  <p>Welcome to our Privacy Policy page! Your privacy is critically important to us.</p>

  <h2>1. Data Collection</h2>
  <p>We collect data such as your name, email address, and phone number when you register on our app.</p>

  <h2>2. Use of Data</h2>
  <p>Your data is used to provide better service and personalized experiences.</p>

  <h2>3. Sharing Information</h2>
  <p>We do not share your personal data with third parties without your consent.</p>

  <h2>4. Security</h2>
  <p>We implement security measures to protect your data from unauthorized access.</p>
`;

const PrivacyAndPolicyScreen: React.FC = () => {
  const {width} = useWindowDimensions();

  const tagsStyles = {
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 12,
      color: colors.textPrimary,
    },
    h2: {
      fontSize: 20,
      fontWeight: '600',
      marginTop: 16,
      marginBottom: 8,
      color: colors.primary,
    },
    p: {
      fontSize: 16,
      lineHeight: 24,
      color: '#4A4A4A',
      marginBottom: 12,
    },
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <RenderHTML
        contentWidth={width}
        source={{html: htmlContent}}
        tagsStyles={tagsStyles as any}
      />
    </ScrollView>
  );
};

export default PrivacyAndPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
});
