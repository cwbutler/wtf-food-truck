import React from 'react';
import { StackNavigation } from '@exponent/ex-navigation';
import ProvideRedux from './ReduxConnect';
import AppDrawer from './drawer';
import Navigation from './Navigation';
import router from '../routes';

function App() {
  return (
    <ProvideRedux>
      <Navigation>
        <AppDrawer />
      </Navigation>
    </ProvideRedux>
  );
}

export default App;
