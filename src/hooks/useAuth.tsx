import React, { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USER } from "../configs/asyncStorage";
import { api } from "../services/api";
import { useEffect } from "react";

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

type AuthContextData = {
  user: User;
  signIn: () => Promise<void>;
  loading: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split(' ')[0];

        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        };

        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

        setUser(userData);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadUserStorageData() {
    const userStorage = await AsyncStorage.getItem(COLLECTION_USER);

    if (userStorage) {
      const userLogged = JSON.parse(userStorage) as User;

      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  
  return context;
}

export { AuthContextProvider, useAuth }
