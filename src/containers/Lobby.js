import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import subscribeToGames from '../actions/games/subscribe'
import createGame from '../actions/games/create'
import joinGame from '../actions/games/join'
import { Link } from 'react-router'
import GameEditor from './GameEditor'
import './GameEditor.sass'
import './Lobby.sass'


class Lobby extends PureComponent {
  componentWillMount() {
    this.props.subscribeToGames()
  }

  renderCreateGameButton() {
    return <RaisedButton
      onTouchTap={this.props.createGame}
      label="Create Game"
      primary={true} />
  }
  renderJoinGameButton(gameId) {
    return <RaisedButton
      onTouchTap={() => {this.props.joinGame(gameId)}}
      label="Join Game"
      primary={true} />
  }

  render() {
    return (
      <div className="games lobby">
        <h1>Games Lobby</h1>

        { this.props.games.length === 0 ?

        <Paper style={{padding: '12px', textAlign: 'center' }}
          zDepth={1}>
          <h2>No Games yet! Feel free to create one!</h2>
          { this.renderCreateGameButton() }
        </Paper> :
        <div className="games-list">
          <div className="actions">
            { this.renderCreateGameButton() }
          </div>

          <div className="games-list">
            <GameEditor />
            { this.props.games.map((game) => {
              return (
                  <div className="game-item">
                    <Paper style={{ padding: '12px 24px' }}
                      zDepth={1}>
                      <h4>{game.title}</h4>
                        <Link to={`/games/${game._id}`}>
                          <RaisedButton label="Go to Game" secondary={true} style={{marginRight: '1rem'}}/>
                        </Link>
                          <div className="actions">
                            {game.players.length < 2 && this.renderJoinGameButton(game._id) }
                          </div>
                    </Paper>
                  </div>
                  )
                })}
            </div>
          </div>
          }
     </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { subscribeToGames, createGame, joinGame })(Lobby)
