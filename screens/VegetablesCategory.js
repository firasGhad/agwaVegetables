import React, {Component} from 'react';
import { View,Image, ScrollView,TouchableOpacity, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import VegetableItem from '../components/VegetableItem';
import * as Animatable from 'react-native-animatable';


import {connect} from 'react-redux';
import {saveScreen} from '../redux/actions/navigator';

class VegetablesCategoryComponent extends Component{

    componentDidMount(){
        this.carRef = null;
        this.props.saveScreen('VegetablesCategory');
        this.getPlants();
        this.loadData();
        setTimeout(()=>this.filterByCategory(),250); 
    }

    
    state = {
        plants: [],
        plantsByCategory:[]
    };

    getPlants = async () => {
        let url = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';
        try{
            let res = await fetch(url);
            let response = await res.json();
            let {plants} = response;
            this.setState({ plants });
        }catch(e){
            console.log(e);
        }

    }

    loadData = () => {
        let plantsByCategory = this.state.plants.length == 0 ? (this.props.route.params.plants || []) : this.state.plantsByCategory;
        this.setState({ plantsByCategory });
    }

    filterByCategory = () => {
        let {plants, plantsByCategory}= this.state, relevantPlants=[];
        for(let i=0; i<plants.length;i++){
          for(let j=0;j<plantsByCategory.length;j++){
            if(plants[i].id == plantsByCategory[j].id){
                relevantPlants.push(plants[i]);
            }
          }
        }
        this.setState({plants: relevantPlants})
    }

    
    render(){
        return (
            <View style={styles.loginUserLayout}>
                {
                    this.state.plants.length === 0 ? null :
                    <Animatable.View animation="fadeInLeft" style={styles.flatListContainer}>
                        <FlatList 
                            data={this.state.plants}
                            keyExtractor={ (item, index) => 'key' + index }
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            snapToAlignment="center"
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            showsHorizontalScrollIndicator={true}
                            renderItem={ (val, ind) => {
                                return <VegetableItem plant={val.item} navigation={this.props.navigation}/>
                            }}/>
                    </Animatable.View>
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginUserLayout:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonMovies: {
        borderWidth: 1,
        borderColor: 'white',                                    
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50
    },
    textMovies: {
        color: '#fff',
        fontSize: 18
    },
    flatListContainer: {
        marginTop: 20,
        height: 320,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0.2, height: 0.2},
        shadowRadius: 10,
        elevation: 5
    }
});

const mapStateToProps = (state) => {
    return {
      screen: state.navigatorReducer.lastPage
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveScreen: (screen) => {
        console.log('sccreeeeee', screen)
        dispatch(saveScreen(screen))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VegetablesCategoryComponent);