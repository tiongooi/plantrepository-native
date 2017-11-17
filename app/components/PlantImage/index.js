import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getImage, openGallery, closeGallery } from '../../redux/actions/plant'
import PhotoGrid from 'react-native-thumbnail-grid'
import Gallery from 'react-native-image-gallery'
import Spinner from '../Spinner'
import styles from './styles'

@connect(store => ({
  isFetching: store.plant.isFetchingImage,
  images: store.plant.images,
}), {
  getImage,
  openGallery,
  closeGallery,
})

export default class PlantImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGallery: false,
      imageIndexUri: '',
    }
  }

  componentDidMount() {
    if (this.props.images.length) return
    this.props.getImage(this.props.queryString)
  }

  componentWillUnmount() {
    this.props.closeGallery()
  }

  openGallery(uri) {
    this.props.openGallery()
    this.setState({ imageIndexUri: uri, showGallery: true })
  }

  closeGallery() {
    this.props.closeGallery()
    this.setState({ showGallery: false })
  }

  render() {
    const { isFetching, images } = this.props
    return(
      <View>
        {
          this.state.showGallery ? (
            <View style={{height:'100%'}}>
              <TouchableOpacity onPress={()=> this.closeGallery()}><Text>XXX</Text></TouchableOpacity>
              <Gallery style={{flex:1, backgroundColor:'black'}} images={images.map(i => Object.assign({}, { source: { uri: i.link } } ))} initialPage={images.map(i => i.link).findIndex(i => i === this.state.imageIndexUri)} />
            </View>
          ):(
            <View>
              {
                isFetching ? (
                  <View style={{height: '100%', justifyContent:'center', alignItems:'center'}}>
                    <Spinner />
                  </View>
                ):(
                  <View style={styles.photoGridContainer}>
                    <PhotoGrid source={images.filter((i, index) => index < 5).map(i => i.link)} onPressImage={(uri) => this.openGallery(uri)} imageProps={{ loadingStyle: { color: '#4BAF50' } }}/>
                    <View style={{transform:[{scaleX:-1}]}}>
                      <PhotoGrid imageStyle={{transform:[{scaleX:-1}]}} source={images.filter((i, index) => index > 4).map(i => i.link)} onPressImage={(uri) => this.openGallery(uri)} imageProps={{ loadingStyle: { color: '#4BAF50' } }}/>
                    </View>
                  </View>
                )
              }
            </View>
          )
        }
      </View>
    )
  }
}
