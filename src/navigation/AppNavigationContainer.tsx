import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {navigationRef} from './NavigationService';
import {LocationPermissionProvider} from '../wrappers';

type Props = {};

const AppNavigationContainer = (props: Props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <LocationPermissionProvider>
        <AppNavigator />
      </LocationPermissionProvider>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
