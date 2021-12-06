import React from "react";
import { Avatar,ListItem } from "react-native-elements";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = [
  {
    name: "@halle",
    message: "hey"
  },
  {
    name: "@carter",
    message: "sup"
  },
  {
    name: "@amaya",
    message: "yo"
  },
  {
    name: "@jason",
    message: "Hey girlie! 😍✨ Love your look! Want to join us? Check DM 💅🏼"
  },
  {
    name: "@adrian",
    message: "hi"
  },
  {
    name: "@josh",
    message: "hello"
  },
]


const messageItems = users.map((user) => {
    return (
      <ListItem
        title={user.name}
        key={uuid.v4()}
      >
      <Avatar
            rounded
            size="small"
            source={{
              uri: "https://d2h1pu99sxkfvn.cloudfront.net/b0/7079909/339328872_uTMmxtG0qv/U5.jpg",
            }}
          />
          <ListItem.Content>
          <ListItem.Title>
          {user.name}
          </ListItem.Title>
          <ListItem.Subtitle>
            {user.message}
          </ListItem.Subtitle>
          </ListItem.Content>
      </ListItem>
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
