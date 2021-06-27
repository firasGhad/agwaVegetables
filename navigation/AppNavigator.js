import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Home from '../screens/Home';
import VegetablesCategories from '../screens/VegetablesCategories';
import VegetablesCategory from '../screens/VegetablesCategory';
import VegetableDetails from '../screens/VegetableDetails';

const Stack = createStackNavigator();

class AppNavigation extends Component {
  
  render() {
    let initialScreen = this.props.screen || 'Home';
    console.log('initialParams',this.props)
    let initialParams=this.props.plantsParams || [];
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName={initialScreen}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="VegetablesCategories" component={VegetablesCategories} />
          <Stack.Screen name="VegetablesCategory" component={VegetablesCategory} initialParams={initialParams} />
          <Stack.Screen name="VegetableDetails" component={VegetableDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.navigatorReducer)
  return {
    screen: state.navigatorReducer.lastPage,
    plantsParams: state.navigatorReducer.plantsParams
  }
}
export default connect(mapStateToProps)(AppNavigation);