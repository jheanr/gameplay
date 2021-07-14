import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    width: '100%'
  },
  title: {
    flex: 1,

    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    textAlign: 'center'
  }
});