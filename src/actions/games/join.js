import { CALL_API, UPDATE} from '../../middleware/api'

export default (gameId) => {
  console.log('joinnnn action')
  return {
    [CALL_API]: {
      service: 'games',
      method: UPDATE,
      type: 'GAME_UPDATED',
      authenticate: true,
      params: { joinGame: true },
      id: gameId,
    }
  }
}
