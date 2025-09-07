import React from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {CrossIcon} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

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
      animationType="fade"
      transparent
      visible={visible}
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        {/* Close button */}
        {/* <Pressable style={styles.closeButton} onPress={onClose}>
          <CrossIcon width={28} height={28} />
        </Pressable> */}

        <Pressable
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={onClose}
          style={styles.closeButton}>
          <AntDesign name="close" size={16} color="#fff" />
        </Pressable>

        {/* Video */}
        <View style={styles.videoWrapper}>
          <Video
            source={{uri: uri!}}
            style={styles.video}
            controls
            resizeMode="contain"
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomVideoPreviewModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoWrapper: {
    width: width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    backgroundColor: '#000',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.6)',
    zIndex: 99,
  },
});
