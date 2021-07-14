import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordIcon from '../../assets/discord.png';

import { styles } from './styles';

interface ButtonIconProps extends RectButtonProps {
  title: string;
}

function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordIcon} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
};

export { ButtonIcon };

