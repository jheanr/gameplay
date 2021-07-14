import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 360,
    width: '100%'
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 16,
    textAlign: 'center'
  },
  description: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 48,
    textAlign: 'center',
  },
})