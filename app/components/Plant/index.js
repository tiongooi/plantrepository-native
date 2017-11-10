import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getPlantData, clearData } from '../../redux/actions/plant'
import Content from '../Content'

@connect(store => ({
  isFetching: store.plant.isFetching,
  plant: store.plant.data,
}), {
  getPlantData,
  clearData,
})
export default class Plant extends Component {

  componentDidMount() {

  }

  componentWillMount() {
    this.props.clearData()
    this.props.getPlantData(this.props.navigation.state.params.id)
  }

  render() {
    let { commonName, botanicalName, family, curatedData } = this.props.plant
    return(
      <View>
        {
          this.props.isFetching ? (
            <Text>Loading....</Text>
          ):(
            <View>
              <Text>{commonName}</Text>
              <Text>{botanicalName}</Text>
              <Text>{family}</Text>
              <Text>Curated Information: </Text>
              {
                curatedData && Object.keys(curatedData).map((p, index) => {
                  return <Content icon={null} title={p} content={curatedData[p]} key={index} />
                })
              }
            </View>
          )
        }
      </View>
    )
  }
}
