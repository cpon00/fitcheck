import React from "react";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = ["@halle", "@carter", "@amaya", "@jason", "@adrian", "@josh"];

const messages = [
  "hey",
  "sup",
  "yo",
  "Hey girlie! 😍✨ Love your look! Want to join us? Check DM 💅🏼",
  "hi",
  "hello",
];

const messageItems = users.map((user, i) => {
  return (
    <List.Item
      title={user}
      description={messages[i]}
      key={uuid.v4()}
      left={(props) => <List.Icon {...props} icon="account-circle-outline" />}
    />
  );
});

function MessagesView() {
  return (
    <List.Section>
      <List.Subheader>Messages</List.Subheader>
      {messageItems}
    </List.Section>
  );
}

export default MessagesView;
