import React from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from '../../contants';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProduct.find(p => p.id === productId),
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.actions}>
        <Button
          color={Colors.primaryColor}
          title="Add to cart"
          onPress={() => {}}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.desc}> {selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = d => {
  return {
    headerTitle: d.navigation.getParam('productTitle'),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  desc: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
export default ProductDetailScreen;
