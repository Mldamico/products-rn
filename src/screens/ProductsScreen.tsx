import React from 'react';
import {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductsContext} from '../context/ProductsContext';

export const ProductsScreen = () => {
  const {loadProducts, products} = useContext(ProductsContext);
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        data={products}
        keyExtractor={p => p._id}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    marginVertical: 5,
  },
});
