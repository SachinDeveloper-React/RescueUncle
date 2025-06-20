import React from 'react';
import {Modal, View, Pressable, StyleSheet, Alert} from 'react-native';
import Video from 'react-native-video';
import {CrossIcon} from '../assets';

const CustomVideoPreviewModal = ({
  visible,
  uri,
  onClose,
}: {
  visible: boolean;
  uri: string | null;
  onClose: () => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onClose();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.videoContainer}>
            <Pressable style={styles.closeButton} onPress={onClose}>
              <CrossIcon width={36} height={36} />
            </Pressable>
            <Video
              source={{uri: uri!}}
              style={styles.video}
              controls
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomVideoPreviewModal;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 22,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 12,
    backgroundColor: '#000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 0,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
