import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import Post from "../../components/Post";

import posts from "../../data/posts";

const Flex = () => {
  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post post={item} />}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default Flex;
