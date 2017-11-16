import React from 'react'
import { Card } from 'react-native-material-ui'
import { View, Text, StyleSheet } from 'react-native'
import { toTitleCase } from '../../helper'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchCard = (props) => {

  const { botanicalName, commonName, family, id } = props.result
  return(
    <Card style={{ container: styles.card }} onPress={() => props.getPlant(props.result)}>
      <Text style={styles.common}>{toTitleCase(commonName)}</Text>
      <Text style={styles.botanical}>{toTitleCase(botanicalName)}</Text>
      <View style={styles.familyContainer}>
        <Icon name='tree' size={15} color={'#4BAF50'} />
        <Text style={styles.family}>{toTitleCase(family)}</Text>
      </View>
    </Card>
  )
} 

export default SearchCard
