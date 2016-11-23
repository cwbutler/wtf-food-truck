import React from 'react';
import { createRouter } from '@exponent/ex-navigation';
import App from './containers/drawer';
import Home from './containers/Home';
import { colors } from '../common/styles';
import { Text } from 'react-native';

export const defaultRouteConfig = {
  navigationBar: {
    backgroundColor: colors.primary,
    tintColor: 'white',
    titleStyle: {
      color: 'white',
      textAlign: 'center',
      marginRight: 56,
      fontWeight: 'bold'
    },
    height: 95
  }
};

export const router = createRouter(() => ({
  app: () => App,
  home: () => Home
}));

export default router;
