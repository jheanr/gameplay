import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
    paddingHorizontal: 24,
    width: '100%',
  },
  content: {
    marginTop: 42
  },
  matches: {
    marginTop: 24,
    marginLeft: 24
  }
})