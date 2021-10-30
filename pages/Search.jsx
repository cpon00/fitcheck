import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import  {SearchWindow } from "../components/SearchWindow";
import {SearchWindowLong} from "../components/SearchWindowLong";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    
    [
    <Searchbar
      placeholder="Trends, Tags, or users"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
      showLoading={true}
    />,
    <View style={styles.searchText}>
      <Text style={styles.searchTextStyle}>Search</Text>
    </View>,
    <Text style={styles.descriptionText}>Your Top Styles</Text>,
    <View style={styles.card}>
      <SearchWindow img={require("../resources/minimal.jpg")} name="Minimalist"/>
      <SearchWindow img={require("../resources/techie.png")} name="Tech Wear" />
    </View>,
    <Text style={styles.descriptionText}>Trending</Text>,
    <View style={styles.card}>
      <SearchWindowLong img={require("../resources/y2k.jpg")} name="Y2K"/>
      <SearchWindow img={require("../resources/alt.jpg")} name="Altnerative" />
      {/* <SearchWindow img={require("../resources/skater.jpg")} name="Skater" /> */}
      
  </View>,

  ]

  );
};

const styles = StyleSheet.create({
  search: {
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    height: 35,
    top:100,
    marginBottom:40
  },
  searchText: {
    left: 30,
    top:50,
    marginBottom:20,
    position:'absolute'
  },
  card: {
    top: 55,
    flexDirection: "row",
    flexWrap: 'wrap',
    margin:5
  },
  searchTextStyle: {
    fontSize: 25,
  },
  descriptionText: {
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 80,
    position:'relative'
  },
});
export { Search };
