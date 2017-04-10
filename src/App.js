import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import LoadingIndicator from './components/LoadingIndicator'
import AppBar from 'material-ui/AppBar'
import './App.sass'

class App extends Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Shut Up Chat"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <div className="app">
            <LoadingIndicator />
            { this.props.children }
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
