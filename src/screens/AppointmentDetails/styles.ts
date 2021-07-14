import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    height: 234,
    width: '100%',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',

    marginBottom: 30,
    paddingHorizontal: 24,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 28,
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 21,
  },
  members: {
    marginTop: 27,
    marginLeft: 24,
  },
  footer: {
    marginBottom: getBottomSpace(),
    paddingHorizontal: 24,
    paddingVertical: 20,
  }
});