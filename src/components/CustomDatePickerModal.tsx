import React from 'react';
import {Modal, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import {colors} from '../constants';

type Props = {
  visible: boolean;
  onClose: () => void;
  date: DateType;
  onSelect: (date: DateType) => void;
  title?: string;
};

const CustomDatePickerModal: React.FC<Props> = ({
  visible,
  onClose,
  date,
  onSelect,
  title,
}) => {
  const defaultStyles = useDefaultStyles();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title || 'Select Date'}</Text>

          <DateTimePicker
            mode="single"
            date={date}
            onChange={({date}) => onSelect(date)}
            styles={defaultStyles}
          />

          <TouchableOpacity style={styles.doneButton} onPress={onClose}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDatePickerModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: moderateScale(16),
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(12),
    padding: moderateScale(16),
  },
  modalTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: moderateScale(12),
    textAlign: 'center',
  },
  doneButton: {
    marginTop: moderateScale(12),
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(8),
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
