import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import {Dropdown} from 'react-native-element-dropdown';
import {scale, verticalScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomButton} from '../../components';
import {CalendarIcon} from '../../assets';

const LeaveRequestForm = () => {
  let today = new Date();
  const [days, setDays] = useState(null);
  const [reason, setReason] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [comments, setComments] = useState('');
  const defaultStyles = useDefaultStyles();
  const [selected, setSelected] = useState<DateType>();

  const daysOptions = [
    {label: '1 Day', value: '1'},
    {label: '2 Days', value: '2'},
    {label: '3 Days', value: '3'},
  ];

  const reasons = [
    {label: 'Sick Leave', value: 'sick'},
    {label: 'Personal', value: 'personal'},
    {label: 'Emergency', value: 'emergency'},
  ];

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      enableOnAndroid
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.heading}>Request your leave details down below</Text>

      <View style={styles.row}>
        <Text style={styles.label}>How many days?</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedText}
          iconStyle={styles.iconStyle}
          data={daysOptions}
          maxHeight={150}
          labelField="label"
          valueField="value"
          placeholder="Select"
          value={days}
          onChange={item => setDays(item.value)}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>To</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowDatePicker(!showDatePicker)}>
          <Text style={styles.dateText}>
            {date.toLocaleDateString() || 'dd/mm/yyyy'}
          </Text>
          <CalendarIcon />
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          mode="single"
          date={selected}
          minDate={today}
          onChange={({date}) => {
            setSelected(date);
            setDate(date as any);
            setShowDatePicker(!showDatePicker);
          }}
          styles={defaultStyles}
        />
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Reason for leave</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedText}
          iconStyle={styles.iconStyle}
          data={reasons}
          maxHeight={150}
          labelField="label"
          valueField="value"
          placeholder="Select"
          value={reason}
          onChange={item => setReason(item.value)}
        />
      </View>

      <Text style={[styles.label, {marginVertical: verticalScale(16)}]}>
        Comments
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder="Explain reason for leave in detail."
        placeholderTextColor="#999"
        multiline
        maxLength={200}
        value={comments}
        onChangeText={setComments}
      />
      <Text style={styles.counter}>{comments.length}/200</Text>

      <CustomButton title="Submit" />
    </KeyboardAwareScrollView>
  );
};

export default LeaveRequestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: scale(20),
    paddingBottom: verticalScale(40),
  },
  heading: {
    fontSize: scale(18),
    fontWeight: 'regular',
    color: '#2B2E35',
    marginBottom: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  label: {
    flex: 1,
    fontSize: scale(16),
    fontWeight: 'regular',
    color: '#57585A',
    marginRight: scale(10),
  },
  dropdown: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: '#FF5B62',
    borderRadius: scale(24),
    paddingHorizontal: scale(12),
    height: verticalScale(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeholder: {
    fontSize: scale(14),
    color: '#999',
  },
  selectedText: {
    fontSize: scale(14),
    color: '#000',
  },
  iconStyle: {
    width: scale(20),
    height: scale(20),
    tintColor: '#FF5B62',
  },
  dateText: {
    fontSize: scale(14),
    color: '#000',
    flex: 1,
  },
  textArea: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#aaa',
    borderRadius: scale(8),
    padding: scale(12),
    minHeight: verticalScale(100),
    textAlignVertical: 'top',
    fontSize: scale(14),
    color: '#000',
  },
  counter: {
    textAlign: 'right',
    fontSize: scale(12),
    color: '#888',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(20),
  },
  submitBtn: {
    backgroundColor: '#FF9EA3',
    borderRadius: scale(24),
    paddingVertical: verticalScale(14),
    alignItems: 'center',
  },
  submitText: {
    fontSize: scale(16),
    color: '#fff',
    fontWeight: '600',
  },
});
