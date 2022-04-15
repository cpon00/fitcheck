import React from "react";
import { Text, View, StyleSheet, Alert, Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";

const SettingsScreen = ({navigation}) => {
  const auth = getAuth();

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>

        <MaterialCommunityIcons name='arrow-left' size='20' style={styles.back} onPress={() => navigation.pop()}></MaterialCommunityIcons>
        <Text style={styles.topText}>Settings</Text>

        </View>

        <View style={styles.midContainer}>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Notifications</Text>
          <MaterialCommunityIcons name="arrow-right" size={14} style={styles.buttonArrow}></MaterialCommunityIcons>
        </TouchableOpacity>
        <View style={styles.midLine} />

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Privacy      </Text>
          <MaterialCommunityIcons name="arrow-right" size={14} style={styles.buttonArrow}></MaterialCommunityIcons>
        </TouchableOpacity>
        <View style={styles.midLine} />

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Security     </Text>
          <MaterialCommunityIcons name="arrow-right" size={14} style={styles.buttonArrow}></MaterialCommunityIcons>
        </TouchableOpacity>
        <View style={styles.midLine} />

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Account     </Text>
          <MaterialCommunityIcons name="arrow-right" size={14} style={styles.buttonArrow}></MaterialCommunityIcons>
        </TouchableOpacity>
        <View style={styles.midLine} />

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Help         </Text>
          <MaterialCommunityIcons name="arrow-right" size={14} style={styles.buttonArrow}></MaterialCommunityIcons>
        </TouchableOpacity>
        <View style={styles.midLine} />

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>About        </Text>
          <MaterialCommunityIcons name="arrow-right" size={14} style={styles.buttonArrow}></MaterialCommunityIcons>
        </TouchableOpacity>

        <View style={styles.midLine} />
        </View>

      <TouchableOpacity
        style={styles.buttonSignOut}
        onPress={() =>
          Alert.alert("Do you want to log out?", "", [
            {
              text: "Cancel",
              style: "cancel",
            },
            { text: "Log Out", onPress: () => auth.signOut() },
          ])
        }
      >
        <Text style={styles.signOutText}>Log Out</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
  height:Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  },
  back:{
    left:"5%",
    top:"10%",
  },
  topContainer:{
    marginBottom:30
  },
  topText:{
    fontSize:20,
    position:"absolute",
    alignSelf:'center',
  },
  buttonText:{
    fontSize:14
  },
  settingButton:{
    height:50,
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center"
  },
  buttonSignOut: {
    height: 40,
    width: 80,
    alignSelf:"center",
    position:"absolute",
    bottom:"18%"
  },
  signOutText:{
    alignSelf:"center",
    fontWeight:"bold",
    color:"blue",
    fontSize:18
  },
  midLine: {
    height: StyleSheet.hairlineWidth,
    width: "95%",
    backgroundColor: "gray",
    zIndex: 15,
    alignSelf:"center"
  },
});
export default SettingsScreen;
