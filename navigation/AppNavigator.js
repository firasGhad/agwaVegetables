import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Welcome from '../screens/Welcome';
import VegetablesCategories from '../screens/VegetablesCategories';
import VegetablesCategory from '../screens/VegetablesCategory';
import VegetableDetails from '../screens/VegetableDetails';

const Stack = createStackNavigator();

class AppNavigation extends Component {
  
  render() {
    let initialScreen = this.props.screen || 'VegetablesCategories';

    setTimeout(()=>{
      console.log('fuccccccck',this.props.screen);

    },9000)

    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={initialScreen}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="VegetablesCategories" component={VegetablesCategories} />
          <Stack.Screen name="VegetablesCategory" component={VegetablesCategory} />
          <Stack.Screen name="VegetableDetails" component={VegetableDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.navigatorReducer.lastPage
  }
}
export default connect(mapStateToProps)(AppNavigation);