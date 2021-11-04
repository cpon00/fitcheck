import React from "react";
import Checks from "./Checks";
import Flex from "./Flex";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <SafeAreaProvider style={{ top: "4.5%" }}>
      <Tab.Navigator
        initialRouteName={"Critic"}
        tabBarOptions={{
          style: {
            backgroundColor: "#f8f4f4",
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen
          name="Flex"
          component={Flex}
          options={{
            tabBarLabel: "Flex",
            tabBarShowLabel: false,
            headerTransparent: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="fire" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Checks"
          component={Checks}
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

export { Home };
