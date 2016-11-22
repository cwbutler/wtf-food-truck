import { createRouter } from '@exponent/ex-navigation';
import Home from './containers/Home';

export default createRouter(() => ({
  home: () => Home
}));
