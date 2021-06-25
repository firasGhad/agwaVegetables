import React, { useState } from 'react';

//import fetcher from '../api/fetcher'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Button
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
    marginTop: 10,
    width: 200,

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textInput: {
    width: 200,
    borderColor: 'gray',

  }
});

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isSignUp: false,
      isReset: false,
      customerRole: false,
      adminCompanyRole: false,
      userCompanyRole: false,
      statusCookie: true,
      role: '',
      msg: '',
      email: '',
      password: '',
      formState: {},
      formMessages: {},
      validityState: {},
      roleLoginCustomers: {}
    }
  }

  

onLoginPressHandler = async () =>{
//   try {
// console.log(this.state)
//       var { data } = await fetcher.post('/login/customers', { email, password } = this.state )
//       console.log(data)
//       if (typeof (data) === 'string') {
//         console.log(data)

//         this.setState({
//           msg: data,
//           validityState: {
//             email: 'form-control btn-round is-invalid',
//             password: 'form-control btn-round is-invalid',
//           }
//         });
//         return;
//       } else {
//         // setUser(data);
//         this.setState({ role: data.role.name })
//       }
//       console.log(data)

//       if (data.role.name === 'customer') {
//         // this.props.history.push('/customer')
//         // this.setState({ customerRole: true });
//       } else if (data.role.name === 'adminCompany') {
//         // this.setState({ adminCompanyRole: true });
//         // this.props.history.replace('/company')
//         // this.props.history.push('/company')
//         // this.props.history.length=0;

//       } else if (data.role.name === 'userCompany') {
//         // this.setState({ userCompanyRole: true });
//         // this.props.history.push('/company')

//       }


//   } catch (error) {
//     console.log(error)

//     if (error instanceof TypeError) {
//       this.setState({ msg: data })
//     } else if (error instanceof Error) {
//       this.setState({ msg: data })
//     }

//   }
}


  render() {
    return (
      <View style={styles.container}>
        {/* <View>
          <Image source={require('../../public/login.jpg')} style={styles.logo}></Image>
        </View> */}
        <TextInput style={styles.textInput}
          placeholder="Email"
          onChangeText={text=>this.setState({ email: text })}
        ></TextInput>
        <TextInput style={styles.textInput}
          placeholder="Password"
          onChangeText={text=>this.setState({ password: text })}
        ></TextInput>
        <View>
          <TouchableOpacity title='כניסה' style={styles.appButtonContainer} onPress={this.onLoginPressHandler} >
            <Text style={styles.appButtonText}>Sign In</Text></TouchableOpacity>
          <TouchableOpacity title='הרשמה' style={styles.appButtonContainer} >
            <Text style={styles.appButtonText}>Sign Up</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
