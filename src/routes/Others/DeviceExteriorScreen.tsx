import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {CustomButton, CustomUploadBox} from '../../components';
import {spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openCamera} from '../../utils';

const DeviceExteriorScreen = () => {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  const handleImagePick = async (type: 'front' | 'back') => {
    const uri = await openCamera();
    if (uri) {
      type === 'front' ? setFrontImage(uri) : setBackImage(uri);
    }
  };

  const handleRemoveImage = (type: 'front' | 'back') => {
    type === 'front' ? setFrontImage(null) : setBackImage(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.title}>Device Photos</Text>
            <Text style={styles.subtitle}>Upload focused photo of Device</Text>
          </View>

          <View style={styles.uploadRow}>
            <View style={{flex: 1}}>
              <CustomUploadBox
                label="Device Front Image"
                imageUri={frontImage}
                onPress={() => handleImagePick('front')}
                onRemoveImage={() => handleRemoveImage('front')}
              />
            </View>
            <CustomUploadBox
              label="Device Back Image"
              imageUri={backImage}
              onPress={() => handleImagePick('back')}
              onRemoveImage={() => handleRemoveImage('back')}
            />
          </View>
        </View>

        <CustomButton
          title="Submit"
          onPress={() => navigate('DeviceSides')}
          style={{marginTop: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

export default DeviceExteriorScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2B2E35',
  },
  subtitle: {
    fontSize: 16,
    color: '#57585A',
    marginTop: spacing.xxs,
  },
  uploadRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    gap: spacing.md,
  },
});
