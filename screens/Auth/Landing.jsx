import React from "react";
import { Pressable, Text, View, StyleSheet,ImageBackground } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground source = {require("../../assets/fitcheck.png")} style = {{flex:1}}>
    <View style={styles.landing}>
    <View style = {styles.buttonContainer}>
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Register")}
        style={styles.registerButton}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer:{
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:'150%',
    height:'10%',
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    height:90,
    width:'100%',
    elevation: 1,
    backgroundColor: 'yellow',
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    height:90,
    width:'100%',
    elevation: 3,
    backgroundColor: '#aed4ff',
  },
  buttonText:{
    color:'black',
    fontSize: 24,
    letterSpacing: 1.5,

  }
});
