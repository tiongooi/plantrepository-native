import database from '../../firebase'
import google from '../../google'
export const GET_PLANT_DATA = 'GET_PLANT_DATA'
export const GET_PLANT_DATA_SUCCESS = 'GET_PLANT_DATA_SUCCESS'
export const GET_PLANT_DATA_FAIL = 'GET_PLANT_DATA_FAIL'

export const GET_PLANT_IMAGE = 'GET_PLANT_IMAGE'
export const GET_PLANT_IMAGE_SUCCESS = 'GET_PLANT_IMAGE_SUCCESS'
export const GET_PLANT_IMAGE_FAIL = 'GET_PLANT_IMAGE_FAIL'

export const CLEAR_PLANT = 'CLEAR_PLANT'

export const OPEN_GALLERY = 'OPEN_GALLERY'
export const CLOSE_GALLERY = 'CLOSE_GALLERY'

export const getData = (id) => dispatch => {
  dispatch({ type: GET_PLANT_DATA })
  database.ref(`plant/${id}`).once('value')
    .then(snapshot => {
      let results = snapshot.val()
      dispatch({ type: GET_PLANT_DATA_SUCCESS, payload: results })
    })
    .catch(err => console.log(err))
}

export const getImage = (queryString) => dispatch => {
  dispatch({ type: GET_PLANT_IMAGE })
  const q = queryString
  fetch(`https://www.googleapis.com/customsearch/v1?key=${google.key}&cx=${google.cx}&q=${q}&searchType=image&imgSize=xxlarge`)
    .then(res => {
      let images = []
      let { items } = JSON.parse(res._bodyInit)

      if (!items) console.log('google image not found, check typo')

      items.map(item => {
        images.push( Object.assign({}, item.image, {link: item.link}) )
      })
      dispatch({ type: GET_PLANT_IMAGE_SUCCESS, payload: images })
    })
    .catch(err => console.log(err))
}

export const clearPlant = () => dispatch => {
  dispatch({ type: CLEAR_PLANT })
}

export const openGallery = () => dispatch => {
  dispatch({ type: OPEN_GALLERY })
}

export const closeGallery = () => dispatch => {
  dispatch({ type: CLOSE_GALLERY })
}
