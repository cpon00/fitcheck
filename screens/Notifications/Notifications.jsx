import React from "react";
import NotificationsView from "../../components/Notifications/NotificationsView";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MessagesView from "../../components/Notifications/MessagesView";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function Notifications() {
  return (
    <SafeAreaProvider style={{ top: "4.5%" }}>
      <Tab.Navigator screenOptions={{
        tabBarIndicatorContainerStyle: { backgroundColor: "#f6f3ed" },
                "tabBarShowLabel": false,
                "tabBarActiveTintColor": "#3042ff",
                "tabBarInactiveTintColor": "grey",
              }
                }>
        <Tab.Screen
          name="NotificationsView"
          component={NotificationsView}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="MessagesView"
          component={MessagesView}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default Notifications;
