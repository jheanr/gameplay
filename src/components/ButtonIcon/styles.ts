import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    height: 56,
    width: '100%'
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRightWidth: 1,
    borderColor: theme.colors.line,
    height: 56,
    width: 56
  },
  icon: {
    height: 18,
    width: 24
  },
  title: {
    flex: 1,

    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center'
  },
})