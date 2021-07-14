import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 24,
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    marginBottom: 4,
  },
  type: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  }
});
