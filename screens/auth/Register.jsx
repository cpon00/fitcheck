import React, { Component } from "react";
import { View, Button, TextInput,StyleSheet } from "react-native";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../App";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        try {
          const docRef = setDoc(doc(db, "users", userCredential.user.uid), {
            name: name,
            email: email,
          });
          console.log("Document written with ID", userCredential.user.uid);
        } catch (e) {
          console.error("Error: ", e);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          placeholder="name"
          style = {styles.input}
          onChangeText={(name) => this.setState({ name })}
        />
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
        <Button onPress={() => this.onSignUp()} title="Sign Up" />
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
export default Register;
