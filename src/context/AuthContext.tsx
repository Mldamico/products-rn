import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useReducer} from 'react';
import {useEffect} from 'react';
import cafeApi from '../api/cafeApi';
import {
  Usuario,
  LoginResponse,
  LoginData,
  RegisterData,
} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './AuthReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  removeError: () => void;
  logout: () => void;
};

const AuthInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      return dispatch({type: 'notAuthenticated'});
    }

    const resp = await cafeApi.get('/auth');
    if (resp.status !== 200) return dispatch({type: 'notAuthenticated'});

    dispatch({
      type: 'signUp',
      payload: {
        token: resp.data.token,
        user: resp.data.usuario,
      },
    });
  };

  const signUp = () => {};
  const signIn = async ({correo, password}: LoginData) => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      console.log(resp.data);
      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.usuario,
        },
      });
      await AsyncStorage.setItem('token', resp.data.token);
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Algo salio mal',
      });
      console.log(error.response.data.msg);
    }
  };
  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: 'logout',
    });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        removeError,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
