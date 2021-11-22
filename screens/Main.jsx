import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { fetchUser } from '../redux/actions/index'

import HomeScreen from './home/Home';
import SearchScreen from '../pages/Search'
import NotificationsScreen from './Notifications/Notifications';
import ProfileScreen from '../pages/Profile/Profile';


const EmptyScreen = () => {
    return(null)
}


const Tab = createMaterialBottomTabNavigator()

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return(
            <Tab.Navigator initialRouteName="Home" labeled ={false}>
                <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name = "home" color = {color} size = {26}/>
                    )
                }}/>
                <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon:({ color, size}) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    )
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
                            <MaterialCommunityIcons name = "plus-circle" color = {color} size = {26}/>
                        )
                    }}/>
                <Tab.Screen name="Notifications" component={NotificationsScreen}
                options={{
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26}/>
                    )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name = "account-circle" color = {color} size = {26}/>
                    )
                }}/>
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
  });

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
