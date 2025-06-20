import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

const htmlContent = `
  <h1>Terms & Conditions</h1>
  <p>By using our application, you agree to the following terms and conditions.</p>

  <h2>1. Acceptance of Terms</h2>
  <p>Using this app means you accept our terms. Please do not use the app if you disagree.</p>

  <h2>2. Modifications</h2>
  <p>We may revise these terms at any time without prior notice. Continued use signifies acceptance.</p>

  <h2>3. User Responsibilities</h2>
  <p>Users must provide accurate information and comply with all laws and regulations.</p>

  <h2>4. Limitations</h2>
  <p>We are not liable for any damages arising from use of the app beyond the extent permitted by law.</p>
`;

const TermsAndConditionScreen: React.FC = () => {
  const {width} = useWindowDimensions();
  const tagsStyles = {
    h1: {
      fontSize: 24,
      fontWeight: 'bold/',
      marginBottom: 12,
      color: '#2B2E35',
    },
    h2: {
      fontSize: 20,
      fontWeight: '600',
      marginTop: 16,
      marginBottom: 8,
      color: '#FF4651',
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
        baseStyle={{
          fontSize: 16,
          color: '#2B2E35',
          lineHeight: 24,
        }}
        tagsStyles={tagsStyles as any}
      />
    </ScrollView>
  );
};

export default TermsAndConditionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
  },
});
