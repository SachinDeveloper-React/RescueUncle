import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomUploadBox} from '../../components';
import {colors, spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openCamera} from '../../utils';
import EnhancedImageViewing from 'react-native-image-viewing';

const DeviceSidesScreen = () => {
  const [leftImage, setLeftImage] = useState<string | null>(null);
  const [rightImage, setRightImage] = useState<string | null>(null);
  const [visible, setIsVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);

  const handleImagePick = async (type: 'left' | 'right') => {
    const result = await openCamera();

    if (result) {
      console.log('result', result);
      const uri = result.uri;
      if (uri) {
        type === 'left' ? setLeftImage(uri) : setRightImage(uri);
      }
    }
  };

  const handleRemoveImage = async (type: 'left' | 'right') => {
    type === 'left' ? setLeftImage('') : setRightImage('');
  };

  const handlePreview = (uri: string) => {
    setSelectedImageUri(uri);
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.title}>Device Photos</Text>
            <Text style={styles.subtitle}>Upload focused photo of Device</Text>
          </View>

          <View style={[styles.uploadRow, {flex: 1}]}>
            <View style={{flex: 1}}>
              <CustomUploadBox
                label="Device Left Image"
                imageUri={leftImage}
                onPress={() => handleImagePick('left')}
                onRemoveImage={() => handleRemoveImage('left')}
                onPreviewPress={() => leftImage && handlePreview(leftImage)}
              />
            </View>
            <CustomUploadBox
              label="Device Right Image"
              imageUri={rightImage}
              onPress={() => handleImagePick('right')}
              onRemoveImage={() => handleRemoveImage('right')}
              onPreviewPress={() => rightImage && handlePreview(rightImage)}
            />
          </View>
        </View>

        <CustomButton
          title="Submit"
          onPress={() => navigate('PackingVerification')}
          style={{marginTop: 20}}
        />

        {selectedImageUri && (
          <EnhancedImageViewing
            images={[{uri: selectedImageUri}]}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => {
              setIsVisible(false);
              setSelectedImageUri(null);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DeviceSidesScreen;

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
    color: colors.textPrimary,
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
