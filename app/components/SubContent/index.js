import React, { Component } from 'react'
import { View, Text } from 'react-native'

const SubContent = (props) => {
  const { title, content, icon } = props
  return(
    <View>
      <Text>{icon}</Text>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  )
}

export default SubContent
