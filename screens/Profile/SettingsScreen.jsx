import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler"

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
        <TextInput
          placeholder="name"
          style = {styles.input}
          onChangeText={(name) => this.setState({ name })}
        />
          <TextInput
          placeholder="pronouns"
          style = {styles.input}
          onChangeText={(pronouns) => this.setState({ pronouns })}
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
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
    </View>
  )
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
export default SettingsScreen;