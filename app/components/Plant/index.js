import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { BottomNavigation } from 'react-native-material-ui'
import { clearPlant } from '../../redux/actions/plant'
import PlantImage from '../PlantImage'
import PlantData from '../PlantData'
import styles from './styles'

@connect(store => ({
  galleryIsOpen: store.plant.galleryIsOpen,
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
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} scrollEnabled={!this.props.galleryIsOpen}>
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
              key='plantData'
              label='Info'
              icon='info'
              onPress={() => this.setState({ active: 'plantData' })}
              active={this.state.active === 'plantData'}
              // style={{active: { fontSize: 70 }}}
            />
             <BottomNavigation.Action
               key='plantImage'
               label='Image'
               icon='camera'
               onPress={() => this.setState({ active: 'plantImage' })}
               active={this.state.active === 'plantImage'}
              //  style={{container: { backgroundColor:'red'}}}
             />
          </BottomNavigation>
        </View>
      </View>
    )
  }
}
