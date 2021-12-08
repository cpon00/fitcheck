import React, { Component } from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../../config";

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
        <TouchableOpacity style={styles.button} onPress={() => this.onSignUp()}>
          <Text style={styles.buttonText}>SIGN UP</Text>
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
  }
})
export default Register;
