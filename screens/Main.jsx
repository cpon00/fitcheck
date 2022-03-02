import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { fetchUser, fetchUserPosts } from '../redux/actions/index'

import HomeScreen from './Home/HomeScreen';
import Search from './Search/Search'
import NotificationsScreen from './Notifications/Notifications';
import ProfileScreen from './Profile/Profile';


const EmptyScreen = () => {
    return(null)
}


const Tab = createBottomTabNavigator()

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
        this.props.fetchUserPosts()
    }
    render() {
        return(
            <Tab.Navigator screenOptions={{
                "tabBarShowLabel": false,
                "tabBarActiveTintColor": "#3042ff",
                "tabBarInactiveTintColor": "grey",
                "tabBarStyle": [
                  {
                    "backgroundColor": "#f6f3ed",
                    "display": "flex"
                  },
                  null
                ]
              }}
              initialRouteName="Home"
              >
                <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name = "home" color= {color} size = {26}/>
                    ),
                    headerShown: false,
                }}/>
                <Tab.Screen name="Search" component={Search}
                    options={{
                        tabBarIcon:({ color, size}) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                        headerShown: false,
                }} />
                <Tab.Screen name="PostContainer" component={EmptyScreen} 
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault()
                            navigation.navigate('Post')
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size}) => (
                            <MaterialCommunityIcons name = "diamond-stone" color = {color} size = {52}/>
                        ),
                        headerShown: false,
                    }}
                    />
                <Tab.Screen name="Notifications" component={NotificationsScreen}
                    options={{
                        tabBarIcon:({color, size}) => (
                            <MaterialCommunityIcons name="bell" color={color} size={26}/>
                        ),
                        headerShown: false,
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                    options={{
                        tabBarIcon: ({ color, size}) => (
                            <MaterialCommunityIcons name = "account-circle" color = {color} size = {26}/>
                        ),
                        headerShown: false,
                }}/>
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, fetchUserPosts}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
