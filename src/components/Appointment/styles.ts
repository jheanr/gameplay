import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',

    width: '100%',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 12,
    width: '100%',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  category: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
  },
  player: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    marginRight: 24,
    marginLeft: 7,
  },
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }
});