import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import subscribeGames from '../actions/games/subscribe'
import rollDie from '../actions/games/roll-die'
import cash from '../actions/games/cash'
import Winner from '../images/winner.gif'
import './GamePage.sass'

class GamePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.subscribeGames()
  }

  renderRollDieButton(gameId) {
    return <button className='die' onTouchTap={() => {this.props.rollDie(gameId)}}>
      Roll die
    </button>
  }

  renderCashButton(gameId) {
    return <button className='die' onTouchTap={() => {this.props.cash(gameId)}}>
      Cash
    </button>
  }

  renderWinner(winner){
    return <div className="winner">
            <div><img src={ Winner }/></div>
            <p> {winner} has Won!'</p>
            <a href='/'>Wanna Play Again?</a>
          </div>
  }

  render() {
    const { _id, title, players, dieRoll, cash } = this.props
    const player1 = players[0]
    const player2 = players[1]
    console.log(_id)

    return (
    <div className='game page'>

      { (player1.roundTotal + player1.gameTotal) >= 100 && this.renderWinner(player1.name) } :
      { (player2.roundTotal + player2.gameTotal ) >= 100 && this.renderWinner(player2.name) }

      <div className="flex-container">
        <div className="flex-player">
         <div className="playerName">{ player1.name }</div>
         <div className="gameTotal">{ player1.gameTotal }</div>
         <div className="roundTotal">{ player1.roundTotal }</div>
         <div >
           { this.renderCashButton(_id) }
         </div>
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
         <div className="actions">
           { this.renderCashButton(_id)}
         </div>
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

export default connect(mapStateToProps, {subscribeGames, rollDie, cash})(GamePage)
