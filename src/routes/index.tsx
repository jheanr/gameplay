import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';
import { AuthRoutes } from './auth.routes';
import { SignIn } from '../screens/SignIn';

function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      { user.id ? <AuthRoutes /> : <SignIn /> }
    </NavigationContainer>
  )
}

export { Routes }
