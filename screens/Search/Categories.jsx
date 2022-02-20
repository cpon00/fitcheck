import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlightBase,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import  CategoriesWindow  from "../../components/SearchComponents/CategoriesWindow";
import  CategoriesScroll from "../../components/SearchComponents/CategoriesScroll";
import SearchWindow  from "../../components/SearchComponents/SearchWindow";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./SearchStyles";

const Categories = (props) => {
  const navigation = useNavigation();
  const related = require('./SearchWindowRelated.json')
  const title = props?.route?.params?.title
  const image = props?.route?.params?.image
  const r1image = related.Minimalist.r1image
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={{ width: "30%"}}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.categoriesText}>
          <MaterialCommunityIcons
            name="arrow-left"
            color={"black"}
            size={30}
            style={{ width: 30 }}
          />
          <Text style={styles.categoriesTextStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style = {{height:670}}> 
          <CategoriesWindow
            img={image}
            name={title}
          />
        <CategoriesScroll />
        <CategoriesScroll />
        <CategoriesScroll />
        <View style={styles.categoriesText}>
          <Text style={styles.relatedTextStyle}>Related</Text>
        </View>
        <View style={styles.card}>
          <SearchWindow
            img= {related[title].r1image}
            name={related[title].r1title}
          />
          <SearchWindow
            img={JSON.stringify(related[title].r2image)}
            name={related[title].r2title}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
