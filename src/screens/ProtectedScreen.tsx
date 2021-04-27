import React from 'react';
import {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const ProtectedScreen = () => {
  const {user, token, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>En protected</Text>
      <Button title="Logout" onPress={logout} color="#5856D6" />
      <Text>{JSON.stringify(user, null, 5)}</Text>
      <Text>{token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
