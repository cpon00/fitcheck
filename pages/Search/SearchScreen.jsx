import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, SafeAreaView,StatusBar } from "react-native";
import  SearchWindow  from "../../components/Search/SearchWindow";
import SearchWindowLong from "../../components/Search/SearchWindowLong";
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
          img={require("../../assets/resources/minimal.jpg")}
          name="Minimalist"
        />
        <SearchWindow
          img={require("../../assets/resources/techie.png")}
          name="Tech Wear"
        />
      </View> 
      <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Trending</Text> 
       <View style={{ flexDirection: "row" }}>
        <View style={styles.Left}>
          <SearchWindow
            img={require("../../assets/resources/earthtones.jpg")}
            name="Earthtones"
          />

          <SearchWindow
            img={require("../../assets/resources/skater.jpg")}
            name="Skater"
          />
          <SearchWindow
            img={require("../../assets/resources/athleisure.jpeg")}
            name="Athleisure"
          />
          <SearchWindow
            img={require("../../assets/resources/fallCore.jpg")}
            name="Fall Core"
          />
          <SearchWindowLong img={require("../../assets/resources/grunge.jpg")} name="Grunge" />
        </View>
        <View style={styles.Right}>
          <SearchWindowLong img={require("../../assets/resources/y2k.jpg")} name="Y2K" navigation />
          <SearchWindow
            img={require("../../assets/resources/hypebeast.jpg")}
            name="Hypebeast"
          />
           <SearchWindow
            img={require("../../assets/resources/academia.jpg")}
            name="Academia"
          />
           <SearchWindow
            img={require("../../assets/resources/ChineseStreetwear.jpg")}
            name="Chinese Streetwear"
          />
          <SearchWindow
            img={require("../../assets/resources/alt.jpg")}
            name="Alternative"
          />
        </View>
      </View> 
      </ScrollView>
      </SafeAreaView>  
   );
};

export default SearchScreen;
