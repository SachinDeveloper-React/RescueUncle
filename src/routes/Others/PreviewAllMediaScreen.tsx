import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import Video from 'react-native-video';
import {useMediaStore} from '../../store/mediaStore';
import {CustomButton} from '../../components';
import {navigate} from '../../navigation';
import {AuthLayout} from '../../layout';

const PreviewAllMediaScreen = () => {
  const [visible, setIsVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const {videos, photos} = useMediaStore();

  const photoEntries = Object.entries(photos);
  const videoEntries = Object.entries(videos || {});

  return (
    <AuthLayout>
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
            <View style={styles.mediaGrid}>
              {videoEntries.map(([label, asset]) =>
                asset?.uri ? (
                  <View key={label} style={styles.mediaItem}>
                    <Video
                      source={{uri: asset.uri}}
                      style={styles.video}
                      controls
                      resizeMode="contain"
                    />
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
          title="Continue"
          onPress={() => navigate('OtpVerification')}
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
  },
  videoLabel: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
    marginBottom: 4,
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
});
