import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';

import ProductOverScreen from '../screens/shops/ProductsOver';
import ProductDetailScreen from '../screens/shops/ProductDetail';

import Colors from '../contants';

const ProductsNavigator = createStackNavigator(
  {
    ProductOverScreen: ProductOverScreen,
    ProductDetailScreen: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: 'white',
    },
  },
);

export default createAppContainer(ProductsNavigator);
