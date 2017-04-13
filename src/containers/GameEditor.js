import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/src/sass/medium-editor.scss'
import CREATE_GAME from '../actions/games/create'
import './GameEditor.sass'

const TYPES = [
  'title',
]

class GameEditor extends PureComponent {
  constructor(props) {
    super()

    const { title } = props

    this.state = {
      title,
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  saveGame() {
    const {
      title,
    } = this.state

    const game = {
      title,
    }

    this.props.CREATE_GAME(game)

  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveGame.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null,{ CREATE_GAME }) (GameEditor)
