import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import styles from '../../screens/Search/SearchStyles'
import { useNavigation } from "@react-navigation/native"; //will use to navigate to specific post

function CategoriesScroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.tagText}>#trendingTag</Text>
      <Text style={styles.seeMore}>5.7K</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.gallery}>
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
          <Image
            style={styles.imageGallery}
            source={require("../../assets/alt.jpg")}
          />
        </View>
      </ScrollView>
    </View>
  );
}


export default CategoriesScroll ;
