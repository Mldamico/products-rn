import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ProductsStackParams} from '../navigations/ProductsNavigator';

import {useCategories} from '../hooks/useCategories';
import {useForm} from '../hooks/useForm';
import {ProductsContext} from '../context/ProductsContext';

interface ProductScreenProps
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen: React.FC<ProductScreenProps> = ({
  route,
  navigation,
}) => {
  // const [selectedCategory, setSelectedCategory] = useState();
  const {categories, isLoading} = useCategories();
  const {id = '', name = ''} = route.params;
  const {loadProductById} = useContext(ProductsContext);
  const {_id, categoriaId, nombre, img, form, onChange, setFormValue} = useForm(
    {
      _id: id,
      categoriaId: '',
      nombre: name,
      img: '',
    },
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name ? name : 'Nuevo Producto',
    });
  }, []);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) return;
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Product"
          value={nombre}
          onChangeText={value => onChange(value, 'nombre')}
        />
        <Text style={styles.label}>Categoria:</Text>

        <Picker
          selectedValue={categoriaId}
          onValueChange={itemValue => onChange(itemValue, 'categoriaId')}>
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
        {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{width: '100%', height: 300, marginTop: 50}}
          />
        )}
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
    color: 'black',
  },
});
function ProductContext(ProductContext: any) {
  throw new Error('Function not implemented.');
}
