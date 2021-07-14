import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_APPOINTMENTS } from '../../configs/asyncStorage';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from './styles';

function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(appointment: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { appointment });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentsStorage: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(appointmentsStorage.filter(item => item.category === category));
    } else {
      setAppointments(appointmentsStorage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleSelectCategory}
      />

      {
        loading ? <Load /> :
        <>
          <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />
        
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={() => handleAppointmentDetails(item)} 
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 68 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      }
    </Background>
  );
};

export { Home };