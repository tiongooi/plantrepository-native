import database from '../../firebase'
export const GET_PLANT_DATA = 'GET_PLANT_DATA'
export const GET_PLANT_DATA_SUCCESS = 'GET_PLANT_DATA_SUCCESS'
export const GET_PLANT_DATA_FAIL = 'GET_PLANT_DATA_FAIL'
export const CLEAR_PLANT = 'CLEAR_PLANT'

export const getPlantData = (id) => dispatch => {
  dispatch({ type: GET_PLANT_DATA })
  database.ref(`plant/${id}`).once('value')
    .then(snapshot => {
      let results = snapshot.val()
      dispatch({ type: GET_PLANT_DATA_SUCCESS, payload: results })
    })
    .catch(err => console.log(err))
}

export const clearData = () => dispatch => {
  dispatch({ type: CLEAR_PLANT })
}
