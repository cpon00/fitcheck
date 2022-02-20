import React from "react";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";

const SettingsScreen = () => {
  const auth = getAuth();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="name"
        style={styles.input}
        onChangeText={(name) => this.setState({ name })}
      />
      <TextInput
        placeholder="pronouns"
        style={styles.input}
        onChangeText={(pronouns) => this.setState({ pronouns })}
      />
      <TextInput
        placeholder="email"
        style={styles.input}
        onChangeText={(email) => this.setState({ email })}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password) => this.setState({ password })}
      />
      <View style={styles.buttonContainer}>
        <View style={{ width: "50%" }}>
          <TouchableOpacity
            style={styles.buttonSave}
            onPress={() => this.onSignUp()}
          >
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.midLine} />
        <View style={{ width: "50%" }}>
          <TouchableOpacity
            style={styles.buttonSignOut}
            onPress={() =>
              Alert.alert("Do you want to sign out?", "", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Sign Out", onPress: () => auth.signOut() },
              ])
            }
          >
            <Text style={styles.buttonText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderColor: "gray",
  },
  container: {
    top: "30%",
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
  buttonSave: {
    marginTop: 12,
    backgroundColor: "skyblue",
    height: 50,
    justifyContent: "center",
    borderBottomLeftRadius: 15,
  },
  buttonSignOut: {
    marginTop: 12,
    backgroundColor: "skyblue",
    height: 50,
    justifyContent: "center",
    borderBottomRightRadius: 15,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "400",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "red",
  },
  midLine: {
    marginTop: 18,
    position: "absolute",
    height: 40,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "gray",
    zIndex: 15,
  },
});
export default SettingsScreen;
