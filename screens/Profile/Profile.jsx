import React from 'react'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function Profile() {
  return (
    <SafeAreaProvider style={{ top: '7.5%' }}>
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default Profile
