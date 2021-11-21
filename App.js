import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

import config from './config.json'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore' 

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login"
import MainScreen from './components/Main'
import PostScreen from './components/main/Post'

import { Home } from "./pages/Home/Home.jsx";
import { Search } from "./pages/Search.jsx";
import { Upload } from "./pages/Upload/Upload.jsx";
import { Notifications } from "./pages/Notifications/Notifications.jsx";
import { Profile } from "./pages/Profile.jsx";

const store = createStore(rootReducer, applyMiddleware(thunk))
const app = initializeApp(config.firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator();

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state

    //this code handles what happens before the application loads.
    if (!loaded) {
      return (
        <View style={styles}>
          <Text>Loading...</Text>
        </View>
      )
    }

    //this code handles what happens when there is no user credentials stored
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    //this code handles when user is logged in and app is loaded.
    return (
      <Provider store ={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Post" component={PostScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  flex: 1,
  justifyContent: "center",
});

export default App;
export { db, app };

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen
//             name="Home"
//             component={Home}
//             options={{
//               tabBarLabel: "Home",
//               headerShown: false,
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="home" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Search"
//             component={Search}
//             options={{
//               tabBarLabel: "Search",
//               headerShown: false,
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons
//                   name="magnify"
//                   color={color}
//                   size={size}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Upload"
//             component={Upload}
//             options={{
//               tabBarLabel: "Upload",
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons
//                   name="diamond-stone"
//                   color={color}
//                   size={35}
//                 />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Notifications"
//             component={Notifications}
//             options={{
//               tabBarLabel: "Notifications",
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons name="bell" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//               tabBarLabel: "Profile",
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialCommunityIcons
//                   name="account"
//                   color={color}
//                   size={size}
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }
