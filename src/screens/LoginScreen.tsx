import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />

        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email</Text>
        <TextInput
          style={[
            loginStyles.textInput,
            Platform.OS === 'ios' && loginStyles.textInputIOS,
          ]}
          placeholder="Ingrese su email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          selectionColor="white"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}>Password</Text>
        <TextInput
          style={[
            loginStyles.textInput,
            Platform.OS === 'ios' && loginStyles.textInputIOS,
          ]}
          placeholder="******"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          selectionColor="white"
          secureTextEntry={true}
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity onPress={() => {}} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={loginStyles.buttonText}>Crear una nueva cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
