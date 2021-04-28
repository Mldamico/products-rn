import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProductsStackParams} from '../navigations/ProductsNavigator';

interface ProductScreenProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen: React.FC<ProductScreenProps> = ({
  route,
  navigation,
}) => {
  const {id, name} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: name ? name : 'Nuevo Producto',
    });
  }, []);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
