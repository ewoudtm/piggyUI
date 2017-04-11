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
      <div className='game page'>
        <h1>Pig Die Game</h1>
        <Link to='/'>Play Again!</Link>
      </div>
    )
  }
}

export default GamePage
