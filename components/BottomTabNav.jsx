import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {Home} from '../pages/Home.jsx'


const Explore = () => <Text>This is the Explore Page!</Text>;

const Post = () => <Text>Here is where you post!</Text>

const Notifications = () => <Text>Notifications here!</Text>;

const Profile = () => <Text>Your Profile!</Text>

const BottomTabNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'home' },
    { key: 'Explore', title: 'Explore', icon: 'magnify' },
    { key: 'Post', title: 'Post', icon: 'diamond-stone' },
    { key: 'Notifications', title: 'Notifications', icon: 'bell' },
    { key: 'Profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Explore: Explore,
    Post: Post,
    Notifications: Notifications,
    Profile: Profile
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabNav;