import React from "react";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = ["@halle", "@carter", "@amaya", "@jason", "@adrian", "@josh"];
const comments = [
  "cool fit!",
  "needs some work",
  "not a fan of the tie",
  "sick shoes",
  "fire",
  "lol what r u wearing bro...",
];

const notifsItems = users.map((user, i) => {
  return (
    <List.Item
      title={user}
      description={comments[i]}
      key={uuid.v4()}
      left={(props) => <List.Icon {...props} icon="account-circle-outline" />}
    />
  );
});

function NotificationsView() {
  return (
    <List.Section>
      <List.Subheader>Notifications</List.Subheader>
      {notifsItems}
    </List.Section>
  );
}

export default NotificationsView;
