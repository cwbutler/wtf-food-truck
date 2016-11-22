import React from 'react';
import ProvideRedux from './ReduxConnect';
import AppDrawer from './Drawer';
import Navigation from './Navigation';

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
