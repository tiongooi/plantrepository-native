import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

export default class Spinner extends Component {

  render() {
    return(
      <View style = {styles.container}>
           <ActivityIndicator
              animating = {true}
              color = '#4BAF50'
              size = "large"
              style = {styles.activityIndicator}/>
        </View>
    )
  }
}

const styles = StyleSheet.create ({
   container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 200,
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})
