import React from 'react'
import { withRouter } from 'react-router-dom'
import * as routes from '../config/routes'
import { firebase } from '../firebase'
import PropTypes from 'prop-types'

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount () {
      firebase.auth().onAuthStateChanged(authUser => {
        if(!authCondition(authUser)) {
          this.props.history.push(routes.LOGIN)
        }
      })
    }

    render () {
      return this.context.authUser
        ? <Component />
        : null
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object
  }

  return withRouter(WithAuthorization)
}

export default withAuthorization

