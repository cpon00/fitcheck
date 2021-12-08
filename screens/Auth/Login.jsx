import React, { Component } from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { email, password } = this.state;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.topText}>Email</Text>
        <TextInput
          placeholder="email"
          style = {styles.input}
          onChangeText={(email) => this.setState({ email })}
        />
        <Text style={styles.topText}>Password</Text>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style = {styles.input}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity onPress={() => this.onSignIn()} style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    height: 35,
    margin: 12,
    borderWidth: .5,
    padding: 10,
    borderColor:"gray"
  },
  container:{
    top:'35%',
    width: '80%',
    alignSelf:'center',
    backgroundColor:'#FAF9F6',
    paddingTop:20,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: .2,
    shadowRadius: 5,
    elevation: 3,
  },
  button:{
    marginTop:12,
    alignSelf:'center',
    backgroundColor:'skyblue',
    width: '100%',
    height: 50,
    justifyContent:'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  buttonText:{
    alignSelf:"center",
    color:'white',
    fontWeight: "400"
  },
  topText:{
    fontWeight: "300",
    marginLeft: 10,
    fontSize: 10
  }
})
export default Login;
