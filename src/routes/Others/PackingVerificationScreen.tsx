import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomUploadBox} from '../../components';
import {spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openCamera, openVideoCamera} from '../../utils';

const PackingVerificationScreen = () => {
  const [leftImage, setLeftImage] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState<string | null>(null);

  const handleImagePick = async (type: 'left' | 'right') => {
    const uri = await openVideoCamera();
    if (uri) {
      type === 'left' ? setLeftImage(uri) : setRightImage(uri);
    }
  };

  const handleRemoveImage = async (type: 'left' | 'right') => {
    type === 'left' ? setLeftImage('') : setRightImage('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.title}>Device Videos</Text>
            <Text style={styles.subtitle}>Upload focused Video of Device</Text>
          </View>

          <View style={[styles.uploadRow, {flex: 1}]}>
            <View style={{flex: 1}}>
              <CustomUploadBox
                uploadText="Upload Video"
                label="Device video before Packing "
                imageUri={leftImage}
                onPress={() => handleImagePick('left')}
                onRemoveImage={() => handleRemoveImage('left')}
              />
            </View>
            <CustomUploadBox
              uploadText="Upload Video"
              label="After Packing"
              imageUri={rightImage}
              onPress={() => handleImagePick('right')}
              onRemoveImage={() => handleRemoveImage('right')}
            />
          </View>
        </View>

        <CustomButton
          title="Submit"
          onPress={() => navigate('OtpVerification')}
          style={{marginTop: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

export default PackingVerificationScreen;

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
    flexDirection: 'column',
    gap: spacing.md,
    marginTop: spacing.lg,
    justifyContent: 'center',
  },
});
