import React from 'react'
import PropTypes from 'prop-types'
import withAuthentication from './withAuthentication'

const HomePage = (props, context) => {
  return (
    <div>
      welcome to home page
    </div>
  )
}

HomePage.contextTypes = {
  authUser: PropTypes.object
}

export default withAuthentication(HomePage)