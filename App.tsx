import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigations/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
