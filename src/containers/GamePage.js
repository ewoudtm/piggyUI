import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import subscribeGames from '../actions/games/subscribe'
import { Link } from 'react-router'
import rollDie from '../actions/games/roll-die'
import RaisedButton from 'material-ui/RaisedButton'
import './GamePage.sass'

class GamePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.subscribeGames()
  }

  renderRollDieButton(gameId) {
    return <RaisedButton
      onTouchTap={() => {this.props.rollDie(gameId)}}
      label="Roll Die"
      primary={true} />
  }

  render() {
    const { _id, title, players, dieRoll } = this.props
    const player1 = players[0]
    const player2 = players[1]
    console.log(_id)

    return (
    <div className='game page'>
      <div className="flex-container">
        <div className="flex-player">
          <div className="playerName">{ player1.name }</div>
         <div className="gameTotal">{ player1.gameTotal }</div>
         <div className="roundTotal">{ player1.roundTotal }</div>
         <div className="cashButton">Cash</div>
        </div>

        <div className="flex-die">
         <div className="gameName">{ title }</div>
         <div className="gameDie">{ dieRoll }</div>
         <div className="actions">
           { this.renderRollDieButton(_id) }
         </div>
        </div>

        <div className="flex-player color">
         <div className="playerName">{ player2.name }</div>
         <div className="gameTotal">{ player2.gameTotal }</div>
         <div className="roundTotal">{ player2.roundTotal }</div>
         <div className="cashButton">Cash</div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, {subscribeGames, rollDie})(GamePage)
