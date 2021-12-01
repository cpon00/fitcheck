import React, { Component } from "react";
import { View, Button, TextInput,StyleSheet } from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
        <TextInput
          placeholder="email"
          style = {styles.input}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style = {styles.input}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignIn()} title="Sign In" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
  },
  container:{
    top:'40%'
  },
  button:{
    
  }
})
export default Login;
