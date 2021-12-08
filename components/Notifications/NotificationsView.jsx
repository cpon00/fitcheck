import React from "react";
import { Avatar,ListItem } from "react-native-elements";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = [
  {
    name: "@halle",
    comment: "cool fit!"
  },
  {
    name: "@carter",
    comment: "needs some work"
  },
  {
    name: "@amaya",
    comment: "not a fan of the tie"
  },
  {
    name: "@jason",
    comment: "sick shoes"
  },
  {
    name: "@adrian",
    comment: "fire"
  },
  {
    name: "@josh",
    comment: "lol what r u wearing bro..."
  }
]

const notifsItems = users.map((user) => {
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
          {user.comment}
        </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
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
