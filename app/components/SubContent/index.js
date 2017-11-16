import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const SubContent = (props) => {
  const { title, content, icon } = props
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}><Icon name={icon} size={16} color={'#4BAF50'} /></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}><Text>{content.charAt(0).toUpperCase() + content.slice(1)}</Text></View>
    </View>
  )
}

export default SubContent
