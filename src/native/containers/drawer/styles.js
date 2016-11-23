import { StyleSheet } from 'react-native';
import { colors } from '../../../common/styles';

export const DRAWER_WIDTH = 320;

export default StyleSheet.create({
  container: {
    width: DRAWER_WIDTH,
    backgroundColor: 'whitesmoke'
  },

  item: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    width: DRAWER_WIDTH - 30,
    padding: 30
  },

  itemLabel: {
    fontSize: 26,
    color: colors.primary
  }
});
