import database from '../../firebase'
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const QUERY = 'QUERY'
export const QUERY_SUCCESS = 'QUERY_SUCCESS'
export const QUERY_FAIL = 'QUERY_FAIL'

export const updateSearch = (v) => dispatch => {
  dispatch({ type: UPDATE_SEARCH, payload: v })
}

export const queryDatabase = (v) => dispatch => {
  //check if v is whitespace
  if ( !v.trim() ) return
  dispatch({ type: QUERY })
  //api.get
  let q1 = query('commonName', v)
  let q2 = query('family', v)
  let q3 = query('botanicalName', v)
  Promise.all([ q1, q2, q3 ])
    .then(results =>
      dispatch({ type: QUERY_SUCCESS, payload: results.reduce((acc, cur) => acc.concat(cur)) }))
}

async function query(node, start) {
  let resultInArray
  //letter increment
  const end = String.fromCharCode(start.toLowerCase().charCodeAt() + 1)
  //query database with node and start
  await database.ref('query').orderByChild(node).startAt(start.toLowerCase()).endAt(end).once('value')
    .then(snapshot => {
      let result = snapshot.val()
      //check if result is null
      if (!result) { resultInArray = []; return }
      resultInArray = Object.keys(result).map(item => Object.assign({}, result[item]) )
    })
    .catch(err => {
      resultInArray = []
      console.log(`error: ${err}`)
    })

    return resultInArray
}
