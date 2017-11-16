import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { BottomNavigation } from 'react-native-material-ui'
import { clearPlant } from '../../redux/actions/plant'
import PlantImage from '../PlantImage'
import PlantData from '../PlantData'
import styles from './styles'

@connect(store => ({
  store,
}), {
  clearPlant,
})
export default class Plant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'plantData',
    }
  }

  componentWillUnmount() {
    this.props.clearPlant()
  }

  render() {
    const { id, botanicalName, commonName, family } = this.props.navigation.state.params.plant
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {
            this.state.active === 'plantData' ? (
              <PlantData id={id} />
            ):(
              <PlantImage queryString={`${botanicalName}`} />
            )
          }
        </ScrollView>
        <View>
          <BottomNavigation>
            <BottomNavigation.Action
              key='info'
              label='Info'
              icon='today'
              onPress={() => this.setState({ active: 'plantData' })}
            />
             <BottomNavigation.Action
               key='image'
               label='Image'
               icon='today'
               onPress={() => this.setState({ active: 'plantImage' })}
             />
          </BottomNavigation>
        </View>
      </View>
    )
  }
}
