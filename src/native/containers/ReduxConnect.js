import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../../redux/store';

const store = createStore({});

function ProvideRedux({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ProvideRedux;
