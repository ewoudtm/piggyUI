import React, { PureComponent, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import fetchGames from '../actions/games/fetch'
import { Link } from 'react-router'
import './GamePage.sass'

class GamePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    // this.props.fetchGames()
  }

  render() {
    return (
      <div className="flex-container">

        <div className="flex-player">
          <div className="playerName">Player 1</div>
         <div className="gameTotal">Game Total</div>
         <div className="roundTotal">Round Total</div>
         <div className="cashButton">Cash</div>
        </div>

        <div className="flex-die">
         <div className="gameName">Play!</div>
         <div className="gameDie">Die</div>
         <div className="rollDie">Roll Die</div>
        </div>

        <div className="flex-player color">
         <div className="playerName">Player 2</div>
         <div className="gameTotal">Game Total</div>
         <div className="roundTotal">Round Total</div>
         <div className="cashButton">Cash</div>
        </div>

      </div>
    )
  }
}

export default GamePage
