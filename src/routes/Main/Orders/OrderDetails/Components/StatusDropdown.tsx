import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
  statusOpen: boolean;
  statusValue: null | any;
  statusItems: {label: string; value: string}[];
  setStatusOpen: Dispatch<SetStateAction<boolean>>;
  setStatusValue: Dispatch<SetStateAction<null | any>>;
  setStatusItems: Dispatch<SetStateAction<{label: string; value: string}[]>>;
};

const StatusDropdown = ({
  statusOpen,
  statusValue,
  statusItems,
  setStatusOpen,
  setStatusValue,
  setStatusItems,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        justifyContent: 'space-between',
      }}>
      <View style={{}}>
        <Text style={styles.updateLabel}>Update Status</Text>
      </View>
      <View style={{flex: 1}}>
        <DropDownPicker
          open={statusOpen}
          value={statusValue}
          items={statusItems}
          setOpen={setStatusOpen}
          setValue={setStatusValue}
          setItems={setStatusItems}
          placeholder="Select an option"
          style={styles.dropdown}
          dropDownContainerStyle={{borderColor: '#FF5C5C'}}
          listMode="SCROLLVIEW"
        />
      </View>
    </View>
  );
};

export default StatusDropdown;

const styles = StyleSheet.create({
  updateLabel: {
    marginVertical: 8,
    color: '#FF5C5C',
    fontWeight: 'bold',
  },
  dropdown: {
    marginVertical: 16,
    borderColor: '#FF5C5C',
  },
});
