import React from 'react';
import { Text, View } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { router, defaultRouteConfig } from '../../routes';
import styles from './styles';

function AppDrawer({ width }) {
  return (
    <DrawerNavigation
      id='main'
      initialItem='home'
      drawerWidth={width}
    >
      <DrawerNavigationItem
        id='home'
        renderTitle={isSelected => <Text>Test</Text>}
      >
        <StackNavigation
          id='home'
          initialRoute={router.getRoute('home')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>
    </DrawerNavigation>
  );
}

export default AppDrawer;
