import API from '../../lib/api'
import appLoading from '../loading/loading'
import loadError from '../loading/load-error'
import loadSuccess from '../loading/load-success'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()
const games = api.service('games')

export default () => {
  return (dispatch) => {
    console.log('Fetching games...')
    dispatch(appLoading(true))
    games.find()
      .then((result) => {
        setTimeout(function() {
          console.log('Results are in!', result)
          dispatch(fetchedGames(result))
          dispatch(loadSuccess())
          dispatch(appLoading(false))
        }, 3000)
      })
      .catch((error) => {
        dispatch(loadError(error))
      })
  }
}

const fetchedGames = (result) => {
  console.log('dispatching fetchedGames')
  return {
    type: FETCHED_GAMES,
    payload: [].concat(result.data)
  }
}
