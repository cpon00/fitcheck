import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from '../../pages/Search/SearchStyles'
function CategoriesWindow({ name, img }) {
  return (
    <View style={styles.imgCenter}>
      <ImageBackground
        style={styles.image}
        source={img}
        imageStyle={{ borderRadius: 5 }}
      >
        <View style={styles.imgTextStyle}>
          <Text style={styles.categoriesImgText}>{name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}


export default CategoriesWindow ;
