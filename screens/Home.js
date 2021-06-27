import React from 'react';


import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';



export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }


    onVegetablesCategoriesPressHandler = () =>{
      this.props.navigation.navigate('VegetablesCategories')
   }
  

    render() {
        return (
            <View id="home">
                <ScrollView>
                        <View>
                            <View title='Welcome'>
                                <Text style={styles.Welcome}>Welcome To Agwa Farm</Text>
                            </View>
                            <Image source={{ uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/pac_choi_mei_qing_choi@3x.jpg` }}
                            style={styles.mainImage} />
                                <TouchableOpacity title='Go Categories Page' onPress={this.onVegetablesCategoriesPressHandler}>
                                <Text  style={styles.Welcome} >Go Categories Page</Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
       Welcome: {
        fontSize: 28,
        backgroundColor: '#4252a0',
        fontWeight: 'bold',
        marginVertical: 25,
        textAlign: 'center',
        color: '#f2f2f2',
        paddingHorizontal: 35,
        paddingVertical: 15,
        elevation: 5,
        padding: 10,  
        fontSize: 18,  
        borderWidth: 1,
        borderColor: 'white',                                    
        paddingHorizontal: 35,
        paddingVertical: 15,
    },
    mainImage: {
        width: 350,
        height: 200,
        marginTop: 30,
        borderRadius: 20
    }
});
