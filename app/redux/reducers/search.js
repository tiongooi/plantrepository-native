import {
  UPDATE_SEARCH,
  QUERY,
  QUERY_SUCCESS,
  QUERY_FAIL,
} from '../actions/search'

const initialState = {
  value: '',
  isFetching: false,
  results: [],
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case QUERY:
      return { ...state, isFetching: true }

    case QUERY_SUCCESS:
      return { ...state, isFetching: false, results: action.payload }

    case QUERY_FAIL:
      return { ...state, isFetching: false }

    case UPDATE_SEARCH:
      return { ...state, value: action.payload }

    default: return state
  }
}

export default searchReducer
