import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 27,
    paddingHorizontal: 24,
    width: '100%',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  subtitle: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  }
});