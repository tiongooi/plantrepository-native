import React from 'react'
import { Card } from 'react-native-material-ui'
import { Text } from 'react-native'

const SearchCard = (props) => {
  const { botanicalName, commonName, family, id } = props.result
  return(
    <Card>
      <Text>{botanicalName}</Text>
      <Text>{commonName}</Text>
      <Text>{family}</Text>
      <Text>{id}</Text>
    </Card>
  )
}

export default SearchCard
