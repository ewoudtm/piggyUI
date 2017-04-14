import { CALL_API, PATCH} from '../../middleware/api'

export default (gameId) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: PATCH,
      type: 'GAME_UPDATED',
      authenticate: true,
      params: { cash: true },
      id: gameId,
    }
  }
}
