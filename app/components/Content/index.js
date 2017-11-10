import React from 'react'
import { View, Text } from 'react-native'

const Content = (props) => {
  const { title, content, icon } = props
  return(
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
      <Text>{icon}</Text>
    </View>
  )
}

export default Content
