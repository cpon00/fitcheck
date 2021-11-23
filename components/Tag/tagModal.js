import React from "react";
import { View, Text } from "react-native";
import IndividualTag from "./indidualTag";
import { StyleSheet } from "react-native";

const product1 = {
  tagImageUri: require("../../assets/photos/shirt.jpg"),
  tagBrandText: "Adidas",
  tagClothingText: "Adicolor Classics Trefoil Hoodie",
  tagUrl: "https://www.adidas.com/us/women-hoodies_sweatshirts",
};
const product2 = {
  tagImageUri: require("../../assets/photos/pants.png"),
  tagBrandText: "Priness Polly",
  tagClothingText: "Kirstyn Pants",
  tagUrl:
    "https://us.princesspolly.com/products/kirstyn-pants?variant=31240194818132",
};
const product3 = {
  tagImageUri: require("../../assets/photos/shoes.png"),
  tagBrandText: "Steve Madden",
  tagClothingText: "Triple Platform Chelsea Boot",
  tagUrl:
    "https://www.nordstrom.com/s/steve-madden-triple-platform-chelsea-boot-women/6431778?color=PINK+LEATH&mrkgadid=3313970543&mrkgcl=760&mrkgen=gpla&mrkgbflag=0&mrkgcat=&utm_content=9383573633&utm_term=aud-958529657475:pla-316840527984&utm_channel=low_nd_shopping_standard&sp_source=google&sp_campaign=645528200&adpos=&creative=57187812113&device=c&matchtype=&network=g&acctid=21700000001689570&dskeywordid=92700049882381274&lid=92700049882381274&ds_s_kwgid=58700005465914876&ds_s_inventory_feed_id=97700000007631122&dsproductgroupid=316840527984&product_id=37659946&merchid=1243147&prodctry=US&prodlang=en&channel=online&storeid=&locationid=9030970&targetid=aud-958529657475:pla-316840527984&campaignid=645528200&adgroupid=9383573633&gclid=CjwKCAiAnO2MBhApEiwA8q0HYSLvxC3Z4ib9Mtlvzrk7792XZ-T4JAtvIvwWX0WSimw-1w6MKQ-6dRoCGBkQAvD_BwE&gclsrc=aw.ds",
};

const TagModal = () => {
  return (
    <View style={modalStyles.modal}>
      <Text style={modalStyles.tag}>Tags</Text>
      <IndividualTag post={product1} />
      <IndividualTag post={product2} />
      <IndividualTag post={product3} />
    </View>
  );
};

export default TagModal;

const modalStyles = StyleSheet.create({
  modal: {
    position: "absolute",
    width: "100%",
    bottom: -20,
    backgroundColor: "black",
    alignSelf: "center",
    backgroundColor: "#f5f5f5",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  tag: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "300",
  },
});
