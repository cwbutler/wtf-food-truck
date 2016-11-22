import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import middleware from './middleware';

const createStoreWithMiddleware = applyMiddleware(
  ...middleware
)(createStore);

const createStoreWithNavigation = createNavigationEnabledStore({
  createStoreWithMiddleware,
  navigationStateKey: 'navigation',
});

export default (initialState) => (
  createStoreWithNavigation(reducer, initialState)
);
