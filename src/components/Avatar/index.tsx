import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { theme } from '../../styles/theme';

import { styles } from './styles';

interface AvatarProps {
  imageUrl: string;
}

function Avatar({ imageUrl }: AvatarProps) {
  const {secondary50, secondary70} = theme.colors;

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
    </LinearGradient>
  );
};

export { Avatar };
