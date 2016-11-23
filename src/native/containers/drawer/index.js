import React from 'react';
import { Text, View } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { router, defaultRouteConfig } from '../../routes';
import styles, { DRAWER_WIDTH } from './styles';
import Item from './Item';

function AppDrawer({ width = DRAWER_WIDTH }) {
  return (
    <DrawerNavigation
      id='main'
      initialItem='location'
      drawerWidth={width}
      drawerStyle={styles.container}
    >
      <DrawerNavigationItem id='home'>
        <StackNavigation
          id='home'
          initialRoute={router.getRoute('home')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>
      <DrawerNavigationItem
        id='location'
        renderTitle={isSelected => <Item isSelected={isSelected} label="LOCATION" />}
      >
        <StackNavigation
          id='location'
          initialRoute={router.getRoute('location')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

      <DrawerNavigationItem
        id='about'
        renderTitle={isSelected => <Item isSelected={isSelected} label="ABOUT US" />}
      >
        <StackNavigation
          id='about'
          initialRoute={router.getRoute('about')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

      <DrawerNavigationItem
        id='menu'
        renderTitle={isSelected => <Item isSelected={isSelected} label="MENU" />}
      >
        <StackNavigation
          id='menu'
          initialRoute={router.getRoute('menu')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>

      <DrawerNavigationItem
        id='contact'
        renderTitle={isSelected => <Item isSelected={isSelected} label="CONTACT US" />}
      >
        <StackNavigation
          id='contact'
          initialRoute={router.getRoute('contact')}
          defaultRouteConfig={defaultRouteConfig}
        />
      </DrawerNavigationItem>
    </DrawerNavigation>
  );
}

export default AppDrawer;
