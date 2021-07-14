import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { 
  Text, 
  View, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { Textarea } from '../../components/Textarea';
import { ModalView } from '../../components/ModalView';
import { GuildProps } from '../../components/Guild';

import { Guilds } from '../Guilds';

import { theme } from '../../styles/theme';
import { styles } from './styles';
import { COLLECTION_APPOINTMENTS } from '../../configs/asyncStorage';

function AppointmentCreate() {
  const [openGuildsModal, setOpenGuilsModal] = useState(false);
  const [category, setCategory] = useState('');
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleOpenGuilsModal() {
    setOpenGuilsModal(true);
  }

  function handleCloseGuilsModal() {
    setOpenGuilsModal(false);
  }

  function handleSelectCategory(categoryId: string) {
    setCategory(categoryId);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuilsModal(false);
  }

  async function handleCreateAppointment() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} - ${hour}:${minutes}`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text style={[styles.label, 
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
          >
            Categoria
          </Text>

          <CategorySelect 
            categorySelected={category}
            setCategory={handleSelectCategory}
            hasCheckbox
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilsModal}>
              <View style={styles.select}>
                { guild.icon 
                  ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> 
                  : <View style={styles.image} /> 
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    { guild.name ? guild.name : 'Selecione um servidor' }
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  size={18}
                  color={theme.colors.heading} 
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2} 
                    onChangeText={setDay}
                    value={day}
                  />

                  <Text style={styles.divider}>
                    /
                  </Text>

                  <SmallInput
                    maxLength={2} 
                    onChangeText={setMonth}
                    value={month}
                  />
                </View>
              </View>  

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Horário
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2} 
                    onChangeText={setHour}
                    value={hour}
                  />

                  <Text style={styles.divider}>
                    :
                  </Text>

                  <SmallInput
                    maxLength={2} 
                    onChangeText={setMinutes}
                    value={minutes}
                  />
                </View>
              </View>        
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Máx. 100 caracteres.
              </Text>
            </View>

            <Textarea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false} 
              onChangeText={setDescription}
              value={description}
            />

            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleCreateAppointment} />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export { AppointmentCreate };
