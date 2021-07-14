import React from 'react';
import { Image, View } from 'react-native';

import DiscordIcon from '../../assets/discord.svg';

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type GuildIconProps = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ iconId, guildId }: GuildIconProps) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      { iconId ? 
        <Image source={{ uri }} style={styles.image} resizeMode="cover" /> : 
        <DiscordIcon width={40} height={40} />
      }
    </View>
  )
}