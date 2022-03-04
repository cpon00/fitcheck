export default [
  {
    id: "p1",
    videoUri: require("../assets/verttestimage.jpg"),
    user: {
      id: "u1",
      username: "jkalili",
      imageUri: require("../assets/profile.jpg"),
    },
    description:
      "my first post with a very long description wow this is so long blah blah blah test",
    likes: 437,
    comments: 19,
  },
  {
    id: "p2",
    videoUri: require("../assets/grunge.jpg"),
    user: {
      id: "u2",
      username: "blah",
      imageUri: require("../assets/profile.jpg"),
    },
    description:
      "my first post with a very long description wow this is so long blah blah blah test",
    likes: 12,
    comments: 12,
  },
  {
    id: "p3",
    videoUri: require("../assets/y2k.jpg"),
    user: {
      id: "u3",
      username: "bleeh",
      imageUri: require("../assets/profile.jpg"),
    },
    description: "blah blah blah test",
    likes: 15,
    comments: 3,
  },
  // FOR VIDEO INTEGRATION
  //   {
  //     id: "p2",
  //     videoUri: require("../assets/testvid.mp4"),
  //     user: {
  //       id: "u2",
  //       username: "carterpon",
  //       imageUri: require("../assets/pawn.jpg"),
  //     },
  //     description: "hey im stinky",
  //     likes: 10,
  //     comments: 1,
  //   },
];
