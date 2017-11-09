import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Toolbar, Card } from 'react-native-material-ui'
import { updateSearch, queryDatabase } from '../../redux/actions/search'
import SearchCard from '../SearchCard'

@connect(store => ({
  searchValue: store.search.value,
  searchResults: store.search.results,
}),{
  updateSearch,
  queryDatabase,
})
export default class Search extends Component {

  componentWillUpdate({ searchValue }) {
    if (searchValue.length > 0 && searchValue.length < 2) {
      this.props.queryDatabase(searchValue)
    }
  }

  handleUpdateSearch(v) {
    this.props.updateSearch(v)
  }

  render() {
    return(
      <View>
        <Toolbar
          leftElement='menu'
          isSearchActive={true}
          // centerElement='Searchable'
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: (v) => this.handleUpdateSearch(v),
            onSearchClosed: this.props.handleHideSearch,
            onSearchPressed: ()=> alert('gello'),
          }}
         />

         <Text>{this.props.searchValue}</Text>
         {
           this.props.searchResults.map((result, index) => <SearchCard result={result} key={index} />)
         }
      </View>
    )
  }
}
