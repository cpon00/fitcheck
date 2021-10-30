import React from "react";
import { List } from "react-native-paper";

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
