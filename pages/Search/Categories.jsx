import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import  CategoriesWindow  from "../../components/SearchComponents/CategoriesWindow";
import  CategoriesScroll from "../../components/SearchComponents/CategoriesScroll";
import SearchWindow  from "../../components/SearchComponents/SearchWindow";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./SearchStyles";

const Categories = ({ title }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={{ width: "20%" }}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.categoriesText}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={"black"}
            size={30}
            style={{ width: 30 }}
          />
          <Text style={styles.categoriesTextStyle}>title</Text>
        </View>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <TouchableOpacity onPress={() => alert(JSON.stringify(title))}>
          <CategoriesWindow
            img={require("../../resources/alt.jpg")}
            name="alt"
          />
        </TouchableOpacity>
        {/* <ImageBackground
        style={styles.image}
        source={image}
        imageStyle={{ borderRadius: 5 }}
      >
        <View style={styles.imgTextStyle}>
          <Text style={styles.imgText}>{title}</Text>
        </View>
      </ImageBackground> */}
        <CategoriesScroll />
        <CategoriesScroll />
        <CategoriesScroll />
        <View style={styles.categoriesText}>
          <Text style={styles.relatedTextStyle}>Related</Text>
        </View>
        <View style={styles.card}>
          <SearchWindow
            img={require("../../resources/minimal.jpg")}
            name="Minimalist"
          />
          <SearchWindow
            img={require("../../resources/techie.png")}
            name="Tech Wear"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
