import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import subscribeGames from '../actions/games/subscribe'
import { Link } from 'react-router'
import './GamePage.sass'

class GamePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.subscribeGames()
  }



  render() {
    const { _id, title, players } = this.props
    const player1 = players[0]
    const player2 = players[1]

    return (
    <div className='game page'>
      <div className="flex-container">
        <div className="flex-player">
          <div className="playerName">{ player1.name}</div>
         <div className="gameTotal">Game Total</div>
         <div className="roundTotal">Round Total</div>
         <div className="cashButton">Cash</div>
        </div>

        <div className="flex-die">
         <div className="gameName">{ title }</div>
         <div className="gameDie">Die</div>
         <div className="rollDie">Roll Die</div>
        </div>

        <div className="flex-player color">
         <div className="playerName">{ player2.name }</div>
         <div className="gameTotal">Game Total</div>
         <div className="roundTotal">Round Total</div>
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

export default connect(mapStateToProps, {subscribeGames})(GamePage)
