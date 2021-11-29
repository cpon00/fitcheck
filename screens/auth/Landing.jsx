import React from "react";
import { Pressable, Text, View, StyleSheet,ImageBackground } from "react-native";

export default function Landing({ navigation }) {
  return (
    <ImageBackground source = {require("../../assets/fitcheck.jpg")} style = {{flex:1}}>
    <View style={styles.landing}>
    <View style = {styles.buttonContainer}>
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={styles.loginButton}
      >
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Register")}
        style={styles.registerButton}
      >
        <Text>Register</Text>
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
    height:'10%'
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    height:60,
    borderRadius: 20,
    width:'75%',
    elevation: 1,
    backgroundColor: 'rgba(214, 178, 164, .3)',
    borderColor:'rgba(0,0,0,1)',
    borderWidth:1
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    height:60,
    borderRadius: 20,
    width:'75%',
    elevation: 3,
    backgroundColor: 'rgba(214, 178, 164, .1)',
    borderColor:'rgba(0,0,0,1)',
    borderWidth:1,
    marginBottom:25
  },
});
