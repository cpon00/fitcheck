import React from "react";
import { Avatar,ListItem } from "react-native-elements";
import { List } from "react-native-paper";
import uuid from "react-native-uuid";

const users = [
  {
    name: "@halle",
    comment: "these with platforms would be hot!"
  },
  {
    name: "@carter",
    comment: "try a black puffer jacket for outerwear"
  },
  {
    name: "@amaya",
    comment: "I think a white button down would work"
  },
  {
    name: "@jason",
    comment: "grouping neutrals together always looks nice"
  },
  {
    name: "@adrian",
    comment: "can't go wrong with a blazer"
  },
  {
    name: "@josh",
    comment: "Linen with Margiela tabi shoes would work"
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
