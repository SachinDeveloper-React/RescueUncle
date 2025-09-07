import React, {useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  CustomButton,
  CustomUploadBox,
  CustomVideoPreviewModal,
} from '../../components';
import {colors, spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openVideoCamera} from '../../utils';
import {useMediaStore} from '../../store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PackingVerificationScreen = () => {
  const {bottom} = useSafeAreaInsets();
  const {videos, setVideo} = useMediaStore();
  const [errorShow, setErrorShow] = useState({before: false, after: false});
  const [isPreviewModalVisible, setPreviewModalVisible] = useState(false);
  const [previewVideoUri, setPreviewVideoUri] = useState<string | null>(null);

  const handleVideoCapture = async (type: 'after' | 'before') => {
    const result = await openVideoCamera();
    if (result) {
      setVideo(type, result);
    }
  };

  const handleRemoveVideo = (type: 'before' | 'after') => {
    setVideo(type, null);
  };

  const handlePreviewVideo = (uri: string) => {
    setPreviewVideoUri(uri);
    setPreviewModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          {
            paddingBottom: Platform.OS === 'ios' ? 0 : bottom,
          },
        ]}>
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
              imageUri={videos.before?.uri || null}
              onPress={() => handleVideoCapture('before')}
              onRemoveImage={() => handleRemoveVideo('before')}
              onPreviewPress={() =>
                videos.before?.uri && handlePreviewVideo(videos.before.uri)
              }
              isError={Boolean(errorShow.before)}
            />
            <CustomUploadBox
              uploadText="Upload Video"
              label="After Packing"
              imageUri={videos.after?.uri || null}
              onPress={() => handleVideoCapture('after')}
              onRemoveImage={() => handleRemoveVideo('after')}
              onPreviewPress={() =>
                videos.after?.uri && handlePreviewVideo(videos.after.uri)
              }
              isError={Boolean(errorShow.after)}
            />
          </View>
        </View>

        <CustomButton
          title="Submit"
          disabled={!Boolean(videos.before) || !Boolean(videos.after)}
          onPress={() => {
            // const {error} = deviceVideoSchema.validate(videos, {
            //   abortEarly: false,
            // });

            // if (error) {
            //   error.details.forEach(detail => {
            //     const field = detail.path[0];
            //     setErrorShow(prev => ({...prev, [field]: true}));
            //   });

            //   return;
            // }

            // setErrorShow({after: false, before: false});
            navigate('PreviewAllMedia');
          }}
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
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    backgroundColor: '#000',
  },
});
