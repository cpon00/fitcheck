import React from "react";
import Checks from "./Checks";
import Flex from "./Flex";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <SafeAreaProvider style={{ top: "5%" }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Flex"
          component={Flex}
          options={{
            tabBarIndicatorContainerStyle: { backgroundColor: "#f6f3ed" },
            tabBarIndicatorStyle: {
              backgroundColor: "#f6f3ed",
              height: "100%",
            },
            tabBarLabel: "Flex",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="fire" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Checks"
          component={Checks}
          options={{
            tabBarIndicatorStyle: {
              backgroundColor: "#f6f3ed",
              height: "100%",
            },
            tabBarIndicatorContainerStyle: { backgroundColor: "#f6f3ed" },
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

export default Home;
