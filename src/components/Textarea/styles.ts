import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary40,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    height: 95,
    marginRight: 4,
    padding: 16,
    textAlignVertical: 'top',
    width: '100%',
  }
});
