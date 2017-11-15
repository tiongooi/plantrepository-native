import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { ActionButton, Toolbar, Button, Dialog, DialogDefaultActions } from 'react-native-material-ui'
import { updateSearch } from '../../redux/actions/search'
import Search from '../Search'
import styles from './styles'
import DialogBox from '../DialogBox'

@connect(store => ({
  test: store
}),{
  updateSearch,
})
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.hideSearch = this.hideSearch.bind(this)
    this.showSearch = this.showSearch.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.state = {
      showSearch: false,
      showCriteria: false,
    }
  }

  showSearch() {
    this.setState({ showSearch: true })
  }

  hideSearch() {
    this.setState({ showSearch: false })
  }

  handleUpdateSearch(v) {
    this.props.updateSearch(v)
  }

  handlePress() {
    this.setState({ showCriteria: false })
  }

  render() {
    return(
      <View style={styles.container} >
        <Toolbar
          leftElement='menu'
          // centerElement='           Respository'
          isSearchActive={this.state.showSearch}
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: (v) => this.handleUpdateSearch(v.trim().toLowerCase()),
            onSearchClosed: this.hideSearch,
            onSearchPressed: this.showSearch,
          }}
        />
        {
          this.state.showCriteria && <DialogBox title={criteria.title} content={criteria.content} actions={criteria.actions} actionPressed={this.handlePress} />
        }
        {
          this.state.showSearch ? (
            <Search handleHideSearch={this.hideSearch} navigation={this.props.navigation} />
          ):(
            <View style={styles.content}>
              <View>
                <Button style={{container: styles.button}} onPress={() => this.showSearch()} raised primary text='Search' />
                <Button accent text='Criteria' onPress={()=> this.setState({ showCriteria: true })}/>
              </View>
              <View />
            </View>
          )
        }
      </View>
    )
  }
}

const criteria = {
  title: 'Search by criteria',
  content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  actions: ['got it']
}
