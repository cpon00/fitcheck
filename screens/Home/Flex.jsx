import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import Post from '../../components/Post/PostFlex'

import posts from '../../data/posts'
console.log('flex posts: ', posts)

const Flex = () => {
  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post post={item} />}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  )
}

export default Flex
