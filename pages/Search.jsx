import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {View, StyleSheet} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <React.Fragment>
      <Searchbar
        placeholder="Trends, Tags, or users"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style = {styles.search}
      />
      <View>
        <Text>Search and destroy</Text>
      </View>
    </React.Fragment>
  );
};

// const SearchText = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Search and destroy</Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({
  search:{
    marginLeft:50,
    marginRight:50,
    borderRadius:40,
    top:80,
  },
  searchText:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export {Search};