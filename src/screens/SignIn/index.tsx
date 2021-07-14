import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png';

import { theme } from '../../styles/theme';
import { styles } from './styles';

function SignIn() {
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível autenticar com o Discord.');
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'} e organize suas{'\n'} jogatinas
          </Text>

          <Text style={styles.description}>
            Crie grupos para jogar seus games{'\n'} favoritos com seus amigos
          </Text>

          {
            loading 
            ? <ActivityIndicator color={theme.colors.primary} /> 
            : <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          }
        </View>
      </View>
    </Background>
  );
};

export { SignIn }
