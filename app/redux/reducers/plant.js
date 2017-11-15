import {
  GET_PLANT_DATA,
  GET_PLANT_DATA_SUCCESS,
  GET_PLANT_DATA_FAIL,
  CLEAR_PLANT,
  GET_PLANT_IMAGE,
  GET_PLANT_IMAGE_SUCCESS,
  GET_PLANT_IMAGE_FAIL,
} from '../actions/plant'

const initialState = {
  isFetching: false,
  isFetchingImage: false,
  data: {},
  images: [],
}

const plantReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_PLANT_DATA:
      return { ...state, isFetching: true }

    case GET_PLANT_IMAGE:
      return { ...state, isFetchingImage: true }

    case GET_PLANT_DATA_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }

    case GET_PLANT_DATA_FAIL:
      return { ...state, isFetching: false }

    case CLEAR_PLANT:
      return { ...state, data: {}, images: [] }

    case GET_PLANT_IMAGE_SUCCESS:
      return { ...state, isFetchingImage: false, images: action.payload }

    case GET_PLANT_IMAGE_FAIL:
      return { ...state, isFetchingImage: false }

    default: return state
  }
}

export default plantReducer
