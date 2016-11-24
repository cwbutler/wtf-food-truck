import React from 'react';
import { View } from 'react-native';
import Exponent from 'exponent';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import router from '../routes';

function Navigation({ children, style }) {
  return (
    <NavigationProvider router={router}>
      <StackNavigation
        id="master"
        initialRoute={router.getRoute('app')}
      />
    </NavigationProvider>
  );
}

export default Navigation;
