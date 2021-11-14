import React from "react";
import Categories from "./Categories";
import SearchScreen from "./SearchScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function Search() {
  return (
    <SafeAreaProvider style={{ top: "4.5%" }}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            //customizations
          },
        }}
      >
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

export { Search };
