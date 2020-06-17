import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Home} from './src/Home';
import {Product} from './src/Product';
import {Cart} from './src/Cart'
const HomeTab = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
     Product:{
         screen: Product,
     },
     Cart: {
       screen: Cart,
     },
  },
 
);
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeTab,
  },
   
});

const AppNavigator = createAppContainer(MyDrawerNavigator);

export default AppNavigator
