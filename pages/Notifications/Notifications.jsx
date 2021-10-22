import React from "react";
import NotificationsView from "./NotificationsView";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MessagesView from "./MessagesView";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Notifications() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NotificationsView"
        component={NotificationsView}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={"1.5em"} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesView"
        component={MessagesView}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={"1.5em"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { Notifications };
