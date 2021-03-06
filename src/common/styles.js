export const colors = {
  primary: '#80202A',
  textColor: '#FEFEFE'
};

export const center = {
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1, backgroundColor: '#80202A'
};

export const scene = Object.assign({}, center, {
  backgroundColor: colors.primary
});

export const text = {
  color: colors.textColor,
  textAlign: 'center',
  fontSize: 16
};

export default {
  center,
  colors,
  scene
};
