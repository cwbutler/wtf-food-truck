import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationProvider } from '@exponent/ex-navigation';
import routes from '../routes';

function Navigation({ children }) {
  return (
    <NavigationProvider router={routes}>
      <StatusBar barStyle="light-content" />
      {children}
    </NavigationProvider>
  );
}

export default Navigation;
