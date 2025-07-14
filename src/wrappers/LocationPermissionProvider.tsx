import {
  AppState,
  AppStateStatus,
  Linking,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {requestLocationPermission} from '../utils';

type Props = {
  children: ReactNode;
};

const LocationPermissionProvider = ({children}: Props) => {
  const appState = useRef(AppState.currentState);
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const checkPermission = async () => {
    const granted = await requestLocationPermission();
    if (!granted) {
      setShowPermissionModal(true);
    } else {
      setShowPermissionModal(false);
    }
  };

  const handleRequestAgain = async () => {
    const granted = await requestLocationPermission();
    if (granted) {
      setShowPermissionModal(false);
    } else {
      setShowPermissionModal(true);
    }
  };

  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      handleRequestAgain();
    }
    appState.current = nextAppState;
  };

  useFocusEffect(
    useCallback(() => {
      checkPermission();
    }, []),
  );

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => subscription.remove();
  }, []);

  return (
    <View style={{flex: 1}}>
      {children}
      <Modal
        visible={showPermissionModal}
        animationType="slide"
        transparent
        onRequestClose={() => {}}>
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.modalContainer,
              {
                paddingBottom: 30,
              },
            ]}>
            <Text style={styles.modalTitle}>Location Required</Text>
            <Text style={styles.modalMessage}>
              This app requires location access to work properly. Please enable
              location.
            </Text>

            <View style={styles.modalActions}>
              <Pressable style={styles.button} onPress={handleRequestAgain}>
                <Text style={styles.buttonText}>Allow Again</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.secondaryButton]}
                onPress={openAppSettings}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                  Open Settings
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LocationPermissionProvider;

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#f0f0f0',
  },
  secondaryButtonText: {
    color: '#333',
  },
});
