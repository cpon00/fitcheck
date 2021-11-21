import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, SafeAreaView,StatusBar } from "react-native";
import  SearchWindow  from "../../components/SearchComponents/SearchWindow";
import SearchWindowLong from "../../components/SearchComponents/SearchWindowLong";
import { ScrollView } from "react-native-gesture-handler";
import styles from './SearchStyles'

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
     <SafeAreaView style = {{flex:1}} >
       <StatusBar barStyle="dark-content" />
       <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
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
          img={require("../../resources/minimal.jpg")}
          name="Minimalist"
        />
        <SearchWindow
          img={require("../../resources/techie.png")}
          name="Tech Wear"
        />
      </View> 
      <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Trending</Text> 
       <View style={{ flexDirection: "row" }}>
        <View style={styles.Left}>
          <SearchWindow
            img={require("../../resources/alt.jpg")}
            name="Altnerative"
          />
          <SearchWindow
            img={require("../../resources/skater.jpg")}
            name="Skater"
          />
          <SearchWindow
            img={require("../../resources/athleisure.jpeg")}
            name="Athleisure"
          />
          <SearchWindow
            img={require("../../resources/fallCore.jpg")}
            name="Fall core"
          />
          
          <SearchWindowLong img={require("../../resources/grunge.jpg")} name="Grunge" />
        </View>
        <View style={styles.Right}>
          <SearchWindowLong img={require("../../resources/y2k.jpg")} name="Y2K" navigation />
          <SearchWindow
            img={require("../../resources/skater.jpg")}
            name="Skater"
          />
          <SearchWindow
            img={require("../../resources/alt.jpg")}
            name="Altnerative"
          />
        </View>
      </View> 
      </ScrollView>
      </SafeAreaView>  
   );
};

export default SearchScreen;
