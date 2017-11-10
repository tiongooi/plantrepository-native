import {
  GET_PLANT_DATA,
  GET_PLANT_DATA_SUCCESS,
  GET_PLANT_DATA_FAIL,
  CLEAR_PLANT,
} from '../actions/plant'

const initialState = {
  isFetching: false,
  data: {},
  images: [],
}

const plantReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_PLANT_DATA:
      return { ...state, isFetching: true }

    case GET_PLANT_DATA_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }

    case GET_PLANT_DATA_FAIL:
      return { ...state, isFetching: false }

    case CLEAR_PLANT:
      return { ...state, data: {}, images: [] }

    default: return state
  }
}

export default plantReducer
