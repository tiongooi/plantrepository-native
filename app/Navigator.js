import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import Plant from './components/Plant'

//root Navigator
const Navigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Plant: {
    screen: Plant,
  }
}, {
  headerMode: 'none',
})

export default Navigator
