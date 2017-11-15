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
  constructor(props) {
    super(props)
    this.handleGetPlant = this.handleGetPlant.bind(this)
  }

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

  handleGetPlant(plant) {
    this.props.navigation.navigate('Plant', { plant: plant })
  }

  render() {

    let filteredResults = []
    let { handleHideSearch, searchValue, searchResults, isFetching } = this.props
    if (!!searchResults[searchValue.charAt(0)]) {
      filteredResults = searchResults[searchValue.charAt(0)].filter(r => this.filterResult(r, searchValue))
    }

    return(
      <View style={{flex:1}}>
         {
           searchValue.length ? (
             <View>
               {
                 isFetching ? (
                   <Text>Loading....</Text>
                 ):(
                   <View>
                     {
                       !!searchResults[searchValue.charAt(0)] && searchResults[searchValue.charAt(0)].length > 0 && filteredResults.length > 0 ? (
                         <View>
                           {
                             filteredResults.map((result, index) => <SearchCard result={result} key={index} getPlant={this.handleGetPlant} />)
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
