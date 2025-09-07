import React, {useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomUploadBox} from '../../components';
import {colors, spacing} from '../../constants';
import {navigate} from '../../navigation';
import {openCamera} from '../../utils';
import EnhancedImageViewing from 'react-native-image-viewing';
import {useMediaStore} from '../../store/mediaStore';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DeviceSidesScreen = () => {
  const {bottom} = useSafeAreaInsets();
  const {photos, setPhoto} = useMediaStore();
  const [visible, setIsVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [errorShow, setErrorShow] = useState({left: false, right: false});

  const handleImagePick = async (type: 'left' | 'right') => {
    const result = await openCamera();

    if (result) {
      const uri = result.uri;
      if (uri) {
        setPhoto(type, result);
      }
    }
  };

  const handleRemoveImage = async (type: 'left' | 'right') => {
    setPhoto(type, null);
  };

  const handlePreview = (uri: string) => {
    setSelectedImageUri(uri);
    setIsVisible(true);
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
            <Text style={styles.title}>Device Photos</Text>
            <Text style={styles.subtitle}>Upload focused photo of Device</Text>
          </View>

          <View style={[styles.uploadRow, {flex: 1}]}>
            <View style={{flex: 1}}>
              <CustomUploadBox
                label="Device Left Image"
                imageUri={photos.left?.uri || null}
                onPress={() => handleImagePick('left')}
                onRemoveImage={() => handleRemoveImage('left')}
                onPreviewPress={() =>
                  photos.left?.uri && handlePreview(photos.left.uri)
                }
                isError={Boolean(errorShow.left)}
              />
            </View>
            <CustomUploadBox
              label="Device Right Image"
              imageUri={photos.right?.uri || null}
              onPress={() => handleImagePick('right')}
              onRemoveImage={() => handleRemoveImage('right')}
              onPreviewPress={() =>
                photos.right?.uri && handlePreview(photos.right.uri)
              }
              isError={Boolean(errorShow.right)}
            />
          </View>
        </View>

        <CustomButton
          title="Next"
          disabled={!Boolean(photos.left) || !Boolean(photos.right)}
          onPress={() => {
            // const {error} = deviceSideSchema.validate(photos, {
            //   abortEarly: false,
            // });

            // if (error) {
            //   error.details.forEach(detail => {
            //     const field = detail.path[0];
            //     setErrorShow(prev => ({...prev, [field]: true}));
            //   });

            //   return;
            // }

            // setErrorShow({left: false, right: false});
            navigate('PackingVerification');
          }}
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
