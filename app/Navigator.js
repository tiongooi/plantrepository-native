import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'

//root Navigator
const Navigator = StackNavigator({
  Home: {
    screen: Home,
  },
}, {
  headerMode: 'none',
})

export default Navigator
