import React from 'react';
import { Text, View } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import { Avatar } from '../Avatar';

import { styles } from './styles';

function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar imageUrl={user.avatar} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greetings}>
            Olá,
          </Text>
          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória!
        </Text>
      </View>
    </View>
  );
};

export { Profile };
