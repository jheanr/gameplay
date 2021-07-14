import React, { useEffect, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { Alert, FlatList, ImageBackground, Text, View, Share, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { api } from '../../services/api';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member, MemberProps } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AppointmentProps } from '../../components/Appointment';
import { Load } from '../../components/Load';

import BannerImg from '../../assets/banner.png';

import { theme } from '../../styles/theme';
import { styles } from './styles';

type Params = {
  appointment: AppointmentProps
}

type Widget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
  avatar: string;
}

function AppointmentDetails() {
  const route = useRoute();
  const { appointment } = route.params as Params;

  const [loading, setLoading] = useState(true);
  const [widget, setWidget] = useState<Widget>({} as Widget);

  async function loadGuildInfo() {
    try {
      const response = await api.get(`/guilds/${appointment.guild.id}/widget.json`);

      setWidget(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('Oops', 'Não foi possível obter as informações do servidor do Discord.');
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' 
      ? `Junte-se a ${appointment.guild.name}` 
      : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite
      })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    loadGuildInfo();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes" 
        action={
          appointment.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            {appointment.guild.name}
          </Text>

          <Text style={styles.subtitle}>
            {appointment.description}
          </Text>
        </View>
      </ImageBackground>

      {
        loading ? <Load /> :
        <>
          <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />

          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }

      {
        appointment.guild.owner && 
        <View style={styles.footer}>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
        </View>
      }
    </Background>
  );
};

export { AppointmentDetails };
