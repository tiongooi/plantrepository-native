import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getData } from '../../redux/actions/plant'
import SubContent from '../SubContent'
import { toTitleCase } from '../../helper'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

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
    let title = ['Additional Information', 'Evergreen/Deciduous', 'Flowering season/color', 'Light', 'Origin', 'Size', 'Soil', 'Drought', 'Frost', 'Flood']
    let match = ['additionalInfo', 'evergreenDeciduous', 'floweringSeasonOrColor', 'light', 'origin', 'size', 'soil', 'drought', 'frost', 'flooding']
    let icon = ['plus-square', 'leaf', 'certificate', 'lightbulb-o', 'location-arrow', 'expand', 'thermometer-half', 'shower', 'snowflake-o', 'tint']
    return(
      <View>
        {
          this.props.isFetching ? (
            <Text>Loading....</Text>
          ):(
            <View>
              {
                curatedData && <View style={styles.dataContainer}>
                  <Text style={styles.common}>{toTitleCase(commonName)}</Text>
                  <Text style={styles.botanical}>{toTitleCase(botanicalName)}</Text>
                  <View style={styles.familyContainer}>
                    <Icon name='tree' size={16} color={'#4BAF50'} />
                    <Text style={styles.family}>{toTitleCase(family)}</Text>
                  </View>
                  <Text style={styles.curatedInfo}>Curated Information: </Text>
                  {
                    Object.keys(curatedData).map((p, index) => {
                      return <SubContent icon={ icon[match.indexOf(p)] } title={ title[match.indexOf(p)] } content={curatedData[p]} key={index} />
                    })
                  }
                </View>
              }
            </View>
          )
        }
      </View>
    )
  }
}
