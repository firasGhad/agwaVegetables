import React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 150,
        height: 100,
    },
    logo: {
        width: 250,
        height: 100,

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 10,
        marginTop: 10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
        }

    }

    onClickLogin = () => {
        this.setState({ isLogin: true });
    }

    onLoginPressHandler = () =>{
       this.props.navigation.navigate('Login')
    }

    onVegetablesCategoriesPressHandler = () =>{
      this.props.navigation.navigate('VegetablesCategories')
   }
  

    render() {
        return (
            <View id="home">
                <ScrollView>
                    <View>
                        <View style={styles.container}>
                            {/* <Image
                                style={styles.logo}
                                source={require('../../public/login.jpg')}
                            /> */}
                            <View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity title='Go Login Page' style={styles.appButtonContainer} onPress={this.onLoginPressHandler}>
                                <Text style={styles.appButtonText}>Go Login Page</Text>
                            </TouchableOpacity>
                            <TouchableOpacity title='Sign Up' style={styles.appButtonContainer} >
                                <Text style={styles.appButtonText}>Sign Up</Text></TouchableOpacity>
                                <TouchableOpacity title='Go Categories Page' style={styles.appButtonContainer} onPress={this.onVegetablesCategoriesPressHandler}>
                                <Text style={styles.appButtonText}>Go Categories Page</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
