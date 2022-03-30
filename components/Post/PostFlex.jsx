import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { Video } from 'expo-av'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import TagModal from '../Tag/tagModal'

const PostFlex = (props) => {
  const [post, setPost] = useState(props.post)
  const [isLiked, setIsLiked] = useState(false)
  const [paused, setPaused] = useState(true)
  const [isModalVisible, setModalVisible] = useState(false)
  const isVideo = false

  const onPlayPausePress = () => {
    setPaused(!paused)
  }

  console.log('POST, ', props.post)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const ifVideo = () => {
    if (post.videoUri.includes('.mp4')) {
      isVideo = true
      console.log(isVideo)
      console.log(isVideo)
      console.log(isVideo)
      console.log(isVideo)
    }
  }

  //need variable to tell if we like the post or not from backend TODO BACKEND
  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1
    setPost({
      ...post,
      likes: post.likes + likesToAdd
    })
    setIsLiked(!isLiked)
  }

  return (
    <View style={styles.container}>
      {/* FOR VIDEO INTEGRATION  */}
      {/* <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={post.videoUri}
          style={styles.postVideo}
          resizeMode="contain"
          isLooping
          shouldPlay={paused}
        />
      </TouchableWithoutFeedback> */}

      <Image source={post.videoUri} style={styles.postVideo} />

      <View style={styles.rightContainer}>
        <Image
          style={styles.profilePicture}
          source={post.user.imageUri}
        ></Image>

        <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
          <MaterialCommunityIcons
            name={'heart'}
            size={40}
            color={isLiked ? 'red' : 'white'}
          />
          <Text style={styles.statsLabel}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() =>
            alert('Comments are currently under construction! Check back soon.')
          }
        >
          <MaterialCommunityIcons name={'message'} size={40} color={'white'} />
          <Text style={styles.statsLabel}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={toggleModal}>
          <MaterialCommunityIcons name={'tag'} size={40} color={'white'} />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback>
        <Modal
          isVisible={isModalVisible}
          swipeDirection={['up', 'down']}
          onBackdropPress={toggleModal}
        >
          <TagModal />
        </Modal>
      </TouchableWithoutFeedback>

      <View style={styles.bottomContainer}>
        <Text style={styles.handle}>@{post.user.username}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </View>
  )
}

export default PostFlex
