import React, {useState} from 'react';
import {Alert, Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  CustomButton,
  CustomUploadBox,
  CustomVideoPreviewModal,
} from '../../components';
import {colors, spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openVideoCamera} from '../../utils';

const PackingVerificationScreen = () => {
  const [beforePackingVideoUri, setBeforePackingVideoUri] = useState<
    string | null
  >(null);
  const [afterPackingVideoUri, setAfterPackingVideoUri] = useState<
    string | null
  >(null);

  const [isPreviewModalVisible, setPreviewModalVisible] = useState(false);
  const [previewVideoUri, setPreviewVideoUri] = useState<string | null>(null);

  const handleVideoCapture = async (type: 'before' | 'after') => {
    const uri = await openVideoCamera();
    if (uri) {
      type === 'before'
        ? setBeforePackingVideoUri(uri)
        : setAfterPackingVideoUri(uri);
    }
  };

  const handleRemoveVideo = (type: 'before' | 'after') => {
    type === 'before'
      ? setBeforePackingVideoUri(null)
      : setAfterPackingVideoUri(null);
  };

  const handlePreviewVideo = (uri: string) => {
    setPreviewVideoUri(uri);
    setPreviewModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.title}>Device Videos</Text>
            <Text style={styles.subtitle}>
              Upload focused video of the device
            </Text>
          </View>

          <View style={[styles.uploadRow, {flex: 1}]}>
            <CustomUploadBox
              uploadText="Upload Video"
              label="Before Packing"
              imageUri={beforePackingVideoUri}
              onPress={() => handleVideoCapture('before')}
              onRemoveImage={() => handleRemoveVideo('before')}
              onPreviewPress={() =>
                beforePackingVideoUri &&
                handlePreviewVideo(beforePackingVideoUri)
              }
            />
            <CustomUploadBox
              uploadText="Upload Video"
              label="After Packing"
              imageUri={afterPackingVideoUri}
              onPress={() => handleVideoCapture('after')}
              onRemoveImage={() => handleRemoveVideo('after')}
              onPreviewPress={() =>
                afterPackingVideoUri && handlePreviewVideo(afterPackingVideoUri)
              }
            />
          </View>
        </View>

        <CustomButton
          title="Submit"
          onPress={() => navigate('OtpVerification')}
          style={{marginTop: 20}}
        />

        {previewVideoUri && (
          <CustomVideoPreviewModal
            visible={isPreviewModalVisible}
            uri={previewVideoUri}
            onClose={() => {
              setPreviewModalVisible(false);
              setPreviewVideoUri(null);
            }}
          />
        )}
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
