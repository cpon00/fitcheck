import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

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

import LandingScreen from "./screens/auth/Landing.jsx";
import RegisterScreen from "./screens/auth/Register.jsx";
import LoginScreen from "./screens/auth/Login.jsx"
import MainScreen from './screens/Main.jsx'
import PostScreen from './screens/Post/Post'

import { Home } from "./screens/home/Home";
import { Search } from "./pages/Search";
import { Upload } from "./pages/Upload/Upload.jsx";
import { Notifications } from "./screens/Notifications/Notifications.jsx";
import { Profile } from "./pages/Profile/Profile.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyDa0oitU7ovHN2ARWdDf0c3OWm7ytk4wmA",
  authDomain: "fitcheck-3de6c.firebaseapp.com",
  projectId: "fitcheck-3de6c",
  storageBucket: "fitcheck-3de6c.appspot.com",
  messagingSenderId: "406176712188",
  appId: "1:406176712188:web:cff2c250e1ab40fadb9e79",
  measurementId: "G-7RHFFYST2R"
};

const store = createStore(rootReducer, applyMiddleware(thunk))
const app = initializeApp(firebaseConfig)
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
    this._isMounted = true


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
    })
  }
  

  render() {
    const { loggedIn, loaded } = this.state

    //this code handles what happens before the application loads.
    if (!loaded) {
      return (
        <View style={styles.preLoad}>
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
  preLoad: {
    flex: 1,
    justifyContent: "center",
  }

  
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
