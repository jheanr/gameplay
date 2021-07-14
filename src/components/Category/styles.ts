import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    marginRight: 8,
    height: 120,
    width: 104
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 8,
    height: 116,
    paddingVertical: 20,
    width: 100
  },
  checked: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    height: 10,
    width: 10,

    position: 'absolute',
    top: 7,
    right: 7
  },
  check: {
    backgroundColor: theme.colors.secondary100,
    borderRadius: 3,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    height: 12,
    width: 12,
    position: 'absolute',
    top: 7,
    right: 7
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    marginTop: 12
  },
});