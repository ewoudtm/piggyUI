import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress'

class LoadingIndicator extends PureComponent {
  render() {
    const { loading } = this.props
    if (!loading) return null

    return <LinearProgress mode="indeterminate" />
  }
}

const mapStateToProps = ({ loading }) => ({ loading })
export default connect(mapStateToProps)(LoadingIndicator)
