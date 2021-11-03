import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet, Text, SafeAreaView,StatusBar } from "react-native";
import  {SearchWindow } from "../components/SearchWindow";
import {SearchWindowLong} from "../components/SearchWindowLong";
import { ScrollView } from "react-native-gesture-handler";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    
     <SafeAreaView style = {{flex:1}}>
       <StatusBar barStyle="dark-content" />
       <ScrollView>
       <Searchbar
        placeholder="Trends, Tags, or users"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        showLoading={true}
      /> 
       <View style={styles.searchText}>
        <Text style={styles.searchTextStyle}>Search</Text>
      </View> 
       <Text style={styles.descriptionText}>Your Top Styles</Text>
       <View style={styles.card}>
        <SearchWindow
          img={require("../resources/minimal.jpg")}
          name="Minimalist"
        />
        <SearchWindow
          img={require("../resources/techie.png")}
          name="Tech Wear"
        />
      </View> 
      <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Trending</Text> 
       <View style={{ flexDirection: "row" }}>
        <View style={styles.Left}>
          <SearchWindow
            img={require("../resources/alt.jpg")}
            name="Altnerative"
          />
          <SearchWindow
            img={require("../resources/skater.jpg")}
            name="Skater"
          />
          <SearchWindow
            img={require("../resources/athleisure.jpeg")}
            name="Athleisure"
          />
          <SearchWindow
            img={require("../resources/fallCore.jpg")}
            name="Fall core"
          />
          <SearchWindowLong img={require("../resources/grunge.jpg")} name="Grunge" />
        </View>
        <View style={styles.Right}>
          <SearchWindowLong img={require("../resources/y2k.jpg")} name="Y2K" />
          <SearchWindow
            img={require("../resources/skater.jpg")}
            name="Skater"
          />
          <SearchWindow
            img={require("../resources/alt.jpg")}
            name="Altnerative"
          />
        </View>
      </View> 
      </ScrollView>
      </SafeAreaView>  
   );
};

const styles = StyleSheet.create({
  search: {
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    height: 35,
    marginTop:50,
    marginBottom:40
  },
  searchText: {
    left: 30,
    position:'absolute'
  },
  card: {
    flexDirection: "row",
    left:20
  },
  searchTextStyle: {
    fontSize: 25,
  },
  descriptionText:{
    marginLeft:20,
    fontWeight:'bold',
    marginBottom:20,
  },
  Left:{
    width:'40%',
    top:20,
    left:20,
  },
  Right:{
    width:'40%',
    position:'absolute',
    top:20,
    right:25,
  }
});
export { Search };
