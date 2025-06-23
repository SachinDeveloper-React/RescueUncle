import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../constants';
import {CustomButton} from '../../components';

const issueOptions = [
  {label: 'App not working', value: 'app_not_working'},
  {label: 'Payment issue', value: 'payment_issue'},
  {label: 'Bug report', value: 'bug_report'},
  {label: 'Other', value: 'other'},
];

const SupportScreen = () => {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log({name, issue, description});
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      enableOnAndroid
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Submit a Support Request</Text>

      <Text style={styles.label}>Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Issue</Text>
      <Dropdown
        style={styles.dropdown}
        data={issueOptions}
        labelField="label"
        valueField="value"
        placeholder="Select an issue"
        value={issue}
        onChange={item => setIssue(item.value)}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Describe your issue in detail"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#999"
      />

      <CustomButton
        title="Submit"
        onPress={handleSubmit}
        style={styles.button}
      />
    </KeyboardAwareScrollView>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    padding: scale(20),
    paddingBottom: verticalScale(40),
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginTop: 8,
    fontSize: 16,
    color: '#000',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginTop: 8,
    justifyContent: 'center',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    textAlignVertical: 'top',
    marginTop: 8,
    minHeight: 120,
  },
  button: {
    marginTop: 30,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
});
