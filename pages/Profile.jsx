import React from "react";
import { View, Text } from "react-native";
import {Avatar, Tab, TabView} from 'react-native-elements';
import pawn from '../assets/photos/pawn.jpg';
import { useState } from "react";




function Profile() {
  const [index, setIndex] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Avatar
      rounded
      source={{uri: pawn}}>
      </Avatar>
      <Text h5>Carter Pon</Text>
      <Text h1>Best overall coder</Text>

      <Tab value={index} onChange={setIndex}>
        <Tab.Item title='flex'/>
        <Tab.Item title='checks'/>
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ backgroundColor: 'cyan', width: '100%' }}>
          <Text h1>flex</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>checks</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
}

export {Profile};