import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Toolbar, Card } from 'react-native-material-ui'
import { updateSearch, queryDatabase } from '../../redux/actions/search'
import SearchCard from '../SearchCard'

@connect(store => ({
  searchValue: store.search.value,
  searchResults: store.search.results,
  isFetching: store.search.isFetching,
}),{
  updateSearch,
  queryDatabase,
})
export default class Search extends Component {

  componentWillUpdate(nextProps) {
    console.log('component is updated')
    const { searchValue, searchResults, queryDatabase } = nextProps
    if (searchResults[searchValue.charAt(0)]) return
     else {
      if (searchValue.length === 1) queryDatabase(searchValue, searchResults)
       else return
    }
  }

  handleUpdateSearch(v) {
    this.props.updateSearch(v)
  }

  filterResult(result, searchValue) {
    return result.botanicalName.indexOf(searchValue) !== -1 ||
           result.family.indexOf(searchValue) !== -1 ||
           result.commonName.indexOf(searchValue) !== -1
  }

  render() {
    let filteredResults = []
    let { handleHideSearch, searchValue, searchResults, isFetching } = this.props
    if (!!searchResults[searchValue.charAt(0)]) {
      filteredResults = searchResults[searchValue.charAt(0)].filter(r => this.filterResult(r, searchValue))
    }
    // let filteredResults = searchResults[searchValue]
    return(
      <View>
        <Toolbar
          leftElement='menu'
          isSearchActive={true}
          // centerElement='Searchable'
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: (v) => this.handleUpdateSearch(v.trim().toLowerCase()),
            onSearchClosed: handleHideSearch,
            onSearchPressed: ()=> alert('gello'),
          }}
         />
         {
           searchValue.length ? (
             <View>
               {
                 isFetching ? (
                   <Text>Loading....</Text>
                 ):(
                   <View>
                     {
                       !!searchResults[searchValue.charAt(0)] && searchResults[searchValue.charAt(0)].length > 0 ? (
                         <View>
                           {
                             filteredResults.length && filteredResults.map((result, index) => <SearchCard result={result} key={index} />)
                           }
                         </View>
                       ):(<Text>not found</Text>)
                     }
                   </View>
                 )
               }
             </View>
           ):(<Text>nothing in search</Text>)
         }
      </View>
    )
  }
}
