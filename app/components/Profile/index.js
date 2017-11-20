import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'

export default class Profile extends Component {
  render() {
    return(
      <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Icon name='child' size={100} color='grey' />
        <Text style={{fontFamily: 'roboto-medium', color:'grey', lineHeight:50}}>Stay tuned...</Text>
        <Text style={{color:'grey'}}>You'll soon be able to log in as a curator</Text>
        <Animatable.Text animation="bounceInLeft" direction='normal' iterationCount={1} style={{color:'grey', fontFamily:'roboto-light', lineHeight:50}}> {'<<'} Slide screen from left to go back</Animatable.Text>
        {/* <Animatable.Text animation="pulse" direction='alternate' iterationCount='infinite'>Stay tuned...</Animatable.Text> */}
      </View>
    )
  }
}
