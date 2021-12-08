import React from "react";
import { Avatar,ListItem } from "react-native-elements";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = [
  {
    name: "@hallegv",
    message: "Hey have you heard of our Lord and Savior Jesus Christ?"
  },
  {
    name: "@quarterpawn",
    message: "You should check out my page!"
  },
  {
    name: "@amayak47",
    message: "Are you interested in collabing with our brand?"
  },
  {
    name: "@jkalili",
    message: "What's up my man, you should really check out this indie brand Vineyard Vines..."
  },
  {
    name: "@adrian.learn",
    message: "hi"
  },
  {
    name: "@joshseaman",
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
