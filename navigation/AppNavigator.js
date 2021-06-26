import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import VegetablesCategories from '../screens/VegetablesCategories';
import VegetablesCategory from '../screens/VegetablesCategory';
import VegetableDetails from '../screens/VegetableDetails';

const Stack = createStackNavigator();

export default class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
        <Stack.Screen name="VegetablesCategories" component={VegetablesCategories} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="VegetablesCategory" component={VegetablesCategory} />
          <Stack.Screen name="VegetableDetails" component={VegetableDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
