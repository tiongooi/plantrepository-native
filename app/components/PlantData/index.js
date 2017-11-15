import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions/plant'
import SubContent from '../SubContent'

@connect(store => ({
  isFetching: store.plant.isFetching,
  plant: store.plant.data,
}),{
  getData,
})
export default class PlantData extends Component {

  componentDidMount() {
    if (Object.keys(this.props.plant).length) return
    this.props.getData(this.props.id)
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
                  return <SubContent icon={null} title={p} content={curatedData[p]} key={index} />
                })
              }
            </View>
          )
        }
      </View>
    )
  }
}
