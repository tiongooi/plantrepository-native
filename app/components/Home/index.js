import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { ActionButton, Toolbar, Button } from 'react-native-material-ui'
import Search from '../Search'
import styles from './styles'

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
      <View style={styles.container} >
        {
          !this.state.showSearch && <Toolbar
            leftElement='menu'
            centerElement='Plant Repository'
          />
        }
        {
          this.state.showSearch ? (
            <Search handleHideSearch={this.hideSearch} navigation={this.props.navigation} />
          ):(
            <View style={styles.content}>
              <View>
                <Button onPress={() => this.showSearch()} raised primary text='Search' />
                <Button accent text='Criteria' onPress={()=>alert('hello')}/>
              </View>
              <View />
            </View>
          )
        }
      </View>
    )
  }
}
