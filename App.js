import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { getAuth } from "firebase/auth";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./screens/Auth/Landing.jsx";
import RegisterScreen from "./screens/Auth/Register.jsx";
import LoginScreen from "./screens/Auth/Login.jsx";
import MainScreen from "./screens/Main.jsx";
import PostScreen from "./screens/Post/Post.jsx";
import SaveScreen from "./screens/Post/Save.jsx"

const store = createStore(rootReducer, applyMiddleware(thunk));
const auth = getAuth();

const Stack = createStackNavigator();
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;

    //this code handles what happens before the application loads.
    if (!loaded) {
      return (
        <View style={styles.preLoad}>
          <Text>Loading...</Text>
        </View>
      );
    }

    //this code handles what happens when there is no user credentials stored
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    //this code handles when user is logged in and app is loaded.
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Post" component={PostScreen} navigation={this.props.navigation} options={{ headerShown: false }}/>
            <Stack.Screen name="Save" component={SaveScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  preLoad: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
