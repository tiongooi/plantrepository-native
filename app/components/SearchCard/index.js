import React from 'react'
import { Card } from 'react-native-material-ui'
import { Text, StyleSheet } from 'react-native'

const SearchCard = (props) => {
  const { botanicalName, commonName, family, id } = props.result
  return(
    <Card style={{ container: styles.card }} onPress={() => props.getPlant(id)}>
      <Text style={styles.botanical}>{botanicalName}</Text>
      <Text style={styles.common}>{commonName}</Text>
      <Text style={styles.family}>{family}</Text>
      <Text>{id}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  botanical: {
    fontFamily: 'roboto-bold',
  },
  common: {
    fontFamily: 'roboto-medium',
  },
  family: {
    fontFamily: 'roboto-light'
  },
  card: {
    height: 100,
    marginTop: 6,
    marginBottom: 6,
    padding: 10,
  }
})

export default SearchCard
