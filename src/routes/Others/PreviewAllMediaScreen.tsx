import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import Video, {VideoRef} from 'react-native-video';
import {useMediaStore} from '../../store/mediaStore';
import {CustomButton} from '../../components';
import {navigate} from '../../navigation';
import {AuthLayout} from '../../layout';
import Entypo from 'react-native-vector-icons/Entypo';
import {useHeaderHeight} from '@react-navigation/elements';

const PreviewAllMediaScreen = () => {
  const headerHeight = useHeaderHeight();
  const videoRefs = useRef<{[key: string]: VideoRef | null}>({});
  const [visible, setIsVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [controles, setControles] = useState(false);

  const {videos, photos} = useMediaStore();

  const photoEntries = Object.entries(photos);
  const videoEntries = Object.entries(videos || {});

  return (
    <AuthLayout extraScrollHeight={Number(headerHeight) || 0}>
      <View style={styles.container}>
        <Text style={styles.title}>Photo Previews</Text>
        <View style={styles.mediaGrid}>
          {photoEntries.map(([label, asset]) =>
            asset?.uri ? (
              <TouchableOpacity
                key={label}
                style={styles.mediaItem}
                onPress={() => {
                  setSelectedImageUri(asset.uri ?? null);
                  setIsVisible(true);
                }}>
                <Image source={{uri: asset.uri}} style={styles.image} />
                <Text style={styles.label}>{label}</Text>
              </TouchableOpacity>
            ) : null,
          )}
        </View>

        {videoEntries.length > 0 && (
          <>
            <Text style={[styles.title, {marginTop: 24}]}>Video Previews</Text>

            <View
              style={[
                styles.mediaGrid,
                {
                  flexDirection: 'column',
                  width: '100%',
                },
              ]}>
              {videoEntries.map(([label, asset]) =>
                asset?.uri ? (
                  <View key={label}>
                    <View style={{position: 'relative'}}>
                      <Video
                        ref={ref => (videoRefs.current[label] = ref) as any}
                        source={{uri: asset.uri}}
                        style={styles.video}
                        resizeMode="contain"
                        controls={controles}
                        onFullscreenPlayerWillDismiss={() => {
                          videoRefs.current[label]?.pause();
                          setControles(false);
                        }}
                        paused={true}
                      />
                      <TouchableOpacity
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                        style={styles.fullscreenBtn}
                        onPress={() => {
                          videoRefs.current[label]?.presentFullscreenPlayer();
                          videoRefs.current[label]?.resume();
                          setControles(true);
                        }}>
                        <Entypo
                          name="resize-full-screen"
                          size={16}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.videoLabel}>🎥 {label}</Text>
                    <Text numberOfLines={1} style={styles.videoUri}>
                      {asset.fileName || asset.uri}
                    </Text>
                  </View>
                ) : null,
              )}
            </View>
          </>
        )}

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

        <Text style={styles.descriptionTitle}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter a description..."
          placeholderTextColor="#999"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <CustomButton
          title="Next"
          disabled={!description}
          onPress={() =>
            navigate('OtpVerification', {
              description: description,
            })
          }
          style={{
            marginVertical: 20,
          }}
        />
      </View>
    </AuthLayout>
  );
};

export default PreviewAllMediaScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  mediaItem: {
    width: '48%',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  label: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    textTransform: 'capitalize',
  },
  videoLabel: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
    marginVertical: 8,
    textTransform: 'capitalize',
  },
  videoUri: {
    fontSize: 12,
    color: '#777',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 12,
    backgroundColor: '#000',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 24,
    marginBottom: 8,
    color: '#333',
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
  },
  fullscreenBtn: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
  },
});
