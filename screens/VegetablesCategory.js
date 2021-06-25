import React, {Component} from 'react';
import { View,Image, ScrollView,TouchableOpacity, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import VegetableItem from '../components/VegetableItem';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get("window");

export default class VegetablesCategoryComponent extends Component{

    componentDidMount(){
        this.carRef = null;
        this.getCategory();
    }

    state = {
        plants: ['aaa']
    };

    getCategory = async () => {

        let url = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

        try{
            let res = await fetch(url);
            let response = await res.json();
            let {plants} = response;
            // console.log('resppppppp', plants)
            // for(let i=0; i< categories.length; i++){
            //     try{
            //             // categories[i]=JSON.parse(categories[i]);
            //             console.log('fuck', categories[i].name)
            //             categories[i]=categories[i].name;
            //     }catch(err){
            //         console.log(err)
            //     }
            // }
            this.setState({ plants });

        }catch(e){
            console.log(e);
        }

    }

    // render(){
    //     return (
    //         <View>
    //         <ScrollView>    
    //         {
    //             this.state.plants ?
    //             this.state.plants.map((plant, i) => {
    //                 return (
    //                     <View>    
    //                          <Text>{plant.name}</Text>
    //                     <Image
    //                               source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plant.imageId}@3x.jpg`}}
    //                                 style={{width: 250, height: 250}}
    //                             />   
    //                 </View>
    //                                     // <Cards
    //                     //     navigation={this.props.navigation}
    //                     //     key={i}
    //                     //     order_id={o.id}
    //                     //     start_point={o.start_point}
    //                     //     destination={o.destination}
    //                     //     customerFirstName={o.customerFirstName}
    //                     //     customerLastName={o.customerLastName}
    //                     //     customerPhone={o.customerPhone}
    //                     //     customerEmail={o.customerEmail}
    //                     //     serial_number={o.serial_number}
    //                     // >
    //                     // </Cards>
    //                 )
    //             })
    //        :    <Text>Loading</Text>
    //     } 
    //     </ScrollView>
    //     </View>
    //     );
    // }
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