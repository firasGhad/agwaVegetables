import React, {Component} from 'react';
import { View, ScrollView,TouchableOpacity, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
// import VegetableItem from './VegetableItem';
import * as Animatable from 'react-native-animatable';


import { NavigateTo } from '../constants/GeneralMethods';

const {width, height} = Dimensions.get("window");

export default class VegetablesCategoriesComponent extends Component{

    componentDidMount(){
        this.carRef = null;
        this.getCategories();
    }

    state = {
        categories: []
    };

    getCategories = async () => {

        let url = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';

        try{
            let res = await fetch(url);
            let response = await res.json();
            let {categories} = response;
            console.log('resppppppp', categories)
            // for(let i=0; i< categories.length; i++){
            //     try{
            //             // categories[i]=JSON.parse(categories[i]);
            //             console.log('fuck', categories[i].name)
            //             categories[i]=categories[i].name;
            //     }catch(err){
            //         console.log(err)
            //     }
            // }
            this.setState({ categories });

        }catch(e){
            console.log(e);
        }

    }

    openVegetablesCategory = (plants) => {
        NavigateTo(this.props.navigation, 'VegetablesCategory', {plants});
     }

    render(){
        return (
            <View>
                {
                    this.state.categories ?
                        <View style={styles.container}>
                            <FlatList
                                style={styles.flatListContainer}
                                data={this.state.categories}
                                renderItem={({item}) => <TouchableOpacity onPress={()=>this.openVegetablesCategory(item.plants)}>
                                    <Text style={styles.listItem}>{item.name}</Text>
                                </TouchableOpacity>}
                            />
                        </View>
                        : <Text>Loading</Text>
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
    listItem: {
        fontSize: 28,
        backgroundColor: '#4252a0',
        fontWeight: 'bold',
        marginVertical: 25,
        textAlign: 'center',
        color: '#f2f2f2',
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50
        ,elevation: 5,
        padding: 10,  
        fontSize: 18,  
        borderWidth: 1,
        borderColor: 'white',                                    
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50
    },
    flatListContainer: {
        marginTop: 20,
        height: 320,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0.2, height: 0.2},
        shadowRadius: 10,
       
    }
});