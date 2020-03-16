import React from 'react';
import {View, Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ShopNavigator from './src/navigation/ShopNavigator';
import ProductReducer from './src/store/reducers/products';

const rootReducer = combineReducers({
  products: ProductReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
