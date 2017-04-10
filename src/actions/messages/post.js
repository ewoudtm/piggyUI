import API from '../../lib/api'

const api = new API()
const messages = api.service('messages')

export default (messageText) => {
  api.app.authenticate()
    .then(() => {
      messages.create({ text: messageText })
    })

  return {
    type: 'SHUT UP'
  }
}
