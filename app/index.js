import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/storeConfig'
import Navigator from './Navigator'
import { StatusBar, View } from 'react-native'

export default class Root extends Component {
  render() {
    return(
      <Provider store={store} >
        <View style={{height: '100%'}}>
          <StatusBar barStyle='dark-content' hidden={false} />
          <View style={{height: 20, backgroundColor: '#4BAF50'}}/>
          <Navigator />
        </View>
      </Provider>
    )
  }
}

{/* <StatusBar
  backgroundColor='blue'
  barStyle='light-content'
/> */}
