import React from 'react';
import { Text, View } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import routes from '../routes';

function AppDrawer({ width }) {
  return (
    <DrawerNavigation
      id='main'
      initialItem='home'
      drawerWidth={width}
      renderHeader={() => <View />}
    >
      <DrawerNavigationItem
        id='home'
        renderTitle={isSelected => <Text>Test</Text>}
      >
        <StackNavigation
          id='home'
          initialRoute={routes.getRoute('home')}
        />
      </DrawerNavigationItem>
    </DrawerNavigation>
  );
}

export default AppDrawer;
