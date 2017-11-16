import React from 'react'
import { Card } from 'react-native-material-ui'
import { Text, StyleSheet } from 'react-native'
import { toTitleCase } from '../../helper'
import styles from './styles'

const SearchCard = (props) => {

  const { botanicalName, commonName, family, id } = props.result
  return(
    <Card style={{ container: styles.card }} onPress={() => props.getPlant(props.result)}>
      <Text style={styles.botanical}>{toTitleCase(botanicalName)}</Text>
      <Text style={styles.common}>{toTitleCase(commonName)}</Text>
      <Text style={styles.family}>{toTitleCase(family)}</Text>
    </Card>
  )
}

export default SearchCard
