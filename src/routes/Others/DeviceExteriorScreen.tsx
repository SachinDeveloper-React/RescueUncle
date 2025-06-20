import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {CustomButton, CustomUploadBox} from '../../components';
import {spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openCamera} from '../../utils';
import ImageView from 'react-native-image-viewing';

const DeviceExteriorScreen = () => {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [visible, setIsVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);

  const handleImagePick = async (type: 'front' | 'back') => {
    const result = await openCamera();

    if (result) {
      console.log('result', result);
      const uri = result.uri;
      if (uri) {
        type === 'front' ? setFrontImage(uri) : setBackImage(uri);
      }
    }
  };

  const handleRemoveImage = (type: 'front' | 'back') => {
    type === 'front' ? setFrontImage(null) : setBackImage(null);
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

          <View style={styles.uploadRow}>
            <View style={{flex: 1}}>
              <CustomUploadBox
                label="Device Front Image"
                imageUri={frontImage}
                onPress={() => handleImagePick('front')}
                onRemoveImage={() => handleRemoveImage('front')}
                onPreviewPress={() => frontImage && handlePreview(frontImage)}
              />
            </View>
            <CustomUploadBox
              label="Device Back Image"
              imageUri={backImage}
              onPress={() => handleImagePick('back')}
              onRemoveImage={() => handleRemoveImage('back')}
              onPreviewPress={() => backImage && handlePreview(backImage)}
            />
          </View>
        </View>

        <CustomButton
          title="Submit"
          onPress={() => navigate('DeviceSides')}
          style={{marginTop: 20}}
        />
        {selectedImageUri && (
          <ImageView
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: spacing.md,
    maxHeight: '80%',
  },
  modalContent: {
    paddingBottom: spacing.lg,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: spacing.md,
    color: '#2B2E35',
    alignSelf: 'center',
  },
  previewItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  previewLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: spacing.xxs,
  },
  previewImg: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  closeButton: {
    marginTop: spacing.md,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#E53935',
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontWeight: '600',
  },
});
