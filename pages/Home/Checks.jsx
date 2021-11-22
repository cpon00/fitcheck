import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import Post from "../../components/Post";

import checkPosts from "../../data/checkPosts";

const Checks = () => {
  return (
    <View>
      <FlatList
        data={checkPosts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post post={item} />}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default Checks;
