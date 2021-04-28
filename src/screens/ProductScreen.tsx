import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ProductsStackParams} from '../navigations/ProductsNavigator';
import cafeApi from '../api/cafeApi';
import {useCategories} from '../hooks/useCategories';

interface ProductScreenProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen: React.FC<ProductScreenProps> = ({
  route,
  navigation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const {categories, isLoading} = useCategories();
  const {id, name} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name ? name : 'Nuevo Producto',
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto:</Text>
        <TextInput style={styles.textInput} placeholder="Product" />
        <Text style={styles.label}>Categoria:</Text>

        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }>
          {categories.map(category => (
            <Picker.Item
              key={category._id}
              label={category.nombre}
              value={category._id}
            />
          ))}
        </Picker>

        <Button title="Guardar" onPress={() => {}} color="#5856D6" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Button title="Camara" onPress={() => {}} />
          <View style={{marginVertical: 10}} />
          <Button title="Galeria" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});
