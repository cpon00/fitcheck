import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./pages/Home/Home.jsx";
import { Search } from "./pages/Search/Search.jsx";
import { Upload } from "./pages/Upload.jsx";
import { Notifications } from "./pages/Notifications/Notifications.jsx";
import { Profile } from "./pages/Profile.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();
import {Categories} from "./pages/Search/Categories.jsx"


const Stack = createStackNavigator();

function TabNavi() {
    return (
        <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />  
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarLabel: "Upload",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="diamond-stone"
                color={color}
                size={35}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }


function AppNavigator() {
    return(
  <NavigationContainer independent={true}>  
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        //customize all at once
      },
    }}
  >
    <Stack.Screen
      name="Categories"
      component={Categories}
      options={{
        headerShown: false,
      }}
    />

  </Stack.Navigator>
  </NavigationContainer>    
)};

export {AppNavigator,TabNavi};