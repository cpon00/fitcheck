import React from "react";
import FlexView from "./FlexView.jsx";
import ChecksView from "./ChecksView.jsx";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Avatar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "react-native-uuid";

const Tab = createMaterialTopTabNavigator();

function Profile() {
  const [index, setIndex] = useState(0);
  const item = 0;
  return (
    //<View style={{ flex: 1, alignItems: 'center' }}></View>

    <SafeAreaProvider key={uuid.v4()}>
      <View style={{ top: "0.2%", alignItems: "center" }}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://d2h1pu99sxkfvn.cloudfront.net/b0/7079909/339328872_uTMmxtG0qv/U5.jpg",
          }}
        ></Avatar>

        <Text style={styles.username}> @mymy123 </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.left}>
            <Text style={styles.followersTextNumber}>69</Text>
            <Text style={styles.followersText}>Following</Text>
          </View>

          <View style={styles.middle}>
            <Text style={styles.followersTextNumber}>1.1b</Text>
            <Text style={styles.followersText}>Followers</Text>
          </View>

          <View style={styles.right}>
            <Text style={styles.followersTextNumber}>34</Text>
            <Text style={styles.followersText}>Posts</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Edit in progress")}
        >
          <Text style={styles.followersTextNumber}>Edit Profile</Text>
        </TouchableOpacity>

        <Text style={styles.bio}>Most fitted of all time</Text>
      </View>

      <Tab.Navigator>
        <Tab.Screen
          name="Flex"
          component={FlexView}
          options={{
            tabBarLabel: "Flex",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="fire" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Checks"
          component={ChecksView}
          options={{
            tabBarLabel: "Checks",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="check-outline"
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    marginTop: 15,
  },

  username: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 20,
  },

  left: {
    top: 0,
    right: 30,
    bottom: 10,
    alignItems: "center",
  },

  middle: {
    top: 0,
    right: 7,
    bottom: 10,
    alignItems: "center",
  },

  right: {
    top: 0,
    left: 23,
    bottom: 10,
    alignItems: "center",
  },

  followers: {
    marginTop: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  followersText: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
  },

  followersTextNumber: {
    fontWeight: "bold",
  },

  button: {
    top: 15,
    marginBottom: 10,
    width: "200%",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10,
  },

  bio: {
    fontSize: 14,
    marginTop: 22,
    marginBottom: 15,
  },
});

export default Profile;
