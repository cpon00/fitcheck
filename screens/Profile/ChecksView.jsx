import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = [
  "@sophiacopallaismymom",
  "@aphextwink",
  "@sneakerhead69",
  "@microchips",
  "@amayak47",
  "@k1sophie",
];
const comments = [
  "these with platforms would be hot!",
  "anna wintour could never",
  "bape?... in 2021? bold.",
  "sick shoes",
  "fire",
  "lol what r u wearing bro...",
];

const ChecksItems = users.map((user, i) => {
  return (
    <List.Item
      title={user}
      description={comments[i]}
      key={i}
      left={(props) => <List.Icon {...props} icon="account-circle-outline" />}
    />
  );
});

function ChecksView() {
  return (
    <ScrollView>
      <List.Section>{ChecksItems}</List.Section>
    </ScrollView>
  );
}
export default ChecksView;
