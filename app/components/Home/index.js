import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { ActionButton, Toolbar, Button } from 'react-native-material-ui'
import Search from '../Search'

@connect(store => ({
  test: store
}),{
  // test: () => alert('hello'),
})
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.hideSearch = this.hideSearch.bind(this)
    this.state = {
      showSearch: false,
    }
  }

  showSearch() {
    this.setState({ showSearch: true })
  }

  hideSearch() {
    this.setState({ showSearch: false })
  }

  render() {
    return(
      <View>
        {
          this.state.showSearch ? (
            <Search handleHideSearch={this.hideSearch} navigation={this.props.navigation} />
          ):(
            <View>
              <Toolbar />
              <Button onPress={() => this.showSearch()} raised primary text='Search' />
              <Button accent text='Criteria' onPress={()=>alert('hello')}/>
            </View>
          )
        }
      </View>
    )
  }
}
