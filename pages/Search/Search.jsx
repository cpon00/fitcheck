import React from "react";
import Categories from "./Categories";
import SearchScreen from "./SearchScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Search() {
  return (
    <SafeAreaProvider style={{ top: "4.5%" }}>
      <Stack.Navigator>
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

export default Search ;
