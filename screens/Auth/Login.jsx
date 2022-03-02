import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import background from "../../assets/fitcheck.png";

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
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
    const auth = getAuth();
    const { email, password } = this.state;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // forgotPassword = (Email) => {
  //   const auth = getAuth()
  //   auth.sendPasswordResetEmail(Email)
  //   .then()
  // }

  render() {
    return (
      <ImageBackground source={background} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.topText}>Email</Text>
          <TextInput
            placeholder="email"
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
          />
          <Text style={styles.topText}>Password</Text>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={styles.buttonContainer}>
            <View style={{ width: "50%" }}>
              <TouchableOpacity
                onPress={() => this.onSignIn()}
                style={styles.buttonLogIn}
              >
                <Text style={styles.buttonText}>LOG IN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.midLine} />
            <View style={{ width: "50%" }}>
              <TouchableOpacity style={styles.buttonForgotPassword}>
                <Text style={styles.buttonText}>FORGOT PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderColor: "gray",
  },
  container: {
    top: "40%",
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#FAF9F6",
    paddingTop: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    marginTop: 12,
    alignSelf: "center",
    backgroundColor: "skyblue",
    width: "100%",
    height: 50,
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    alignSelf: "center",
    color: "#FAF9F6",
    fontWeight: "400",
  },
  topText: {
    fontWeight: "300",
    marginLeft: 10,
    fontSize: 10,
  },
  buttonLogIn: {
    marginTop: 12,
    backgroundColor: "skyblue",
    height: 50,
    justifyContent: "center",
    borderBottomLeftRadius: 15,
  },
  buttonForgotPassword: {
    marginTop: 12,
    backgroundColor: "skyblue",
    height: 50,
    justifyContent: "center",
    borderBottomRightRadius: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  midLine: {
    marginTop: 18,
    height: 40,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "gray",
    zIndex: 15,
  },
});
export default Login;
