import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigateTo } from '../constants/GeneralMethods';

const {width, height} = Dimensions.get('window');

export default class VegetableItem extends Component{

    openVegetableDetails = () => {
       NavigateTo(this.props.navigation, 'VegetableDetails', {plant} = this.props);
    }

  
 

    render(){

        let {plant} = this.props;
        return (
            <TouchableOpacity onPress={this.openVegetableDetails}>
                <View style={styles.cardView}>
                    <Image   source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plant.imageId}@3x.jpg`}}
                        style={styles.cardImage}/>
                </View>    
                <View style={styles.cardTitleWrapper}>
                        <Text style={styles.cardTitle}>{plant.name}</Text>     
                    </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cardView: {
        width: width / 2,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    cardTitleWrapper: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        margin: 10
    },
    cardImage: {
        width: width / 2,
        height: height / 3,
        borderRadius: 10
    },
    cardTitle:{
        color: 'black',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5
    }
});