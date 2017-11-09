import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/storeConfig'
import Navigator from './Navigator'

export default class Root extends Component {
  render() {
    return(
      <Provider store={store} >
        <Navigator />
      </Provider>
    )
  }
}
