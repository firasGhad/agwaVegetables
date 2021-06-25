import React, {Component} from 'react';
import { View, ScrollView,TouchableOpacity, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
// import VegetableItem from './VegetableItem';
import * as Animatable from 'react-native-animatable';

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

    render(){
        return (
            <View>
            <ScrollView>    
            {
                this.state.categories ?
                this.state.categories.map((o, i) => {
                    console.log('teeest')
                    return (
                        <Text>{o.name} </Text>
                        // <Cards
                        //     navigation={this.props.navigation}
                        //     key={i}
                        //     order_id={o.id}
                        //     start_point={o.start_point}
                        //     destination={o.destination}
                        //     customerFirstName={o.customerFirstName}
                        //     customerLastName={o.customerLastName}
                        //     customerPhone={o.customerPhone}
                        //     customerEmail={o.customerEmail}
                        //     serial_number={o.serial_number}
                        // >
                        // </Cards>
                    )
                })
           :    <Text>tttttt</Text>
        } 
        </ScrollView>
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
        // backgroundColor: '#00A86B',
        // paddingHorizontal: 15,
        // paddingVertical: 10,
        // borderRadius: 10     
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