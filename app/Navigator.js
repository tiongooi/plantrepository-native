import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from './components/Home'
import Plant from './components/Plant'
import Profile from './components/Profile'
import Icon from 'react-native-vector-icons/FontAwesome'

//plant stack Navigator
const PlantStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Plant: {
    screen: Plant,
  }
}, {
  headerMode: 'none',
})

//profile stack Navigator
const UserStack = StackNavigator({
  Profile: {
    screen: Profile,
  },
}, {
  headerMode: 'none',
})

//root navigator (Drawer)
const Navigator = DrawerNavigator({
  Plant: {
    screen: PlantStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (<Icon name='tree' size={20} color={tintColor} />)
    }
  },
  User: {
    screen: UserStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (<Icon name='user-circle' size={20} color={tintColor} />)
    }
  },
}, {
  drawerWidth:280,
  drawerBackgroundColor:'#439d48',
  contentOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontFamily: 'roboto-light',
      fontSize: 19,
    },
  },
})

export default Navigator
