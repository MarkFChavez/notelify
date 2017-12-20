import React from 'react'
import PropTypes from 'prop-types'
import withAuthorization from './withAuthorization'
import { auth } from '../firebase'

const HomePage = (props, { authUser }) => {
  return (
    <div>
      welcome to home page {' '}
      {authUser && authUser.email}

      <a href="#" className="text-black font-bold" onClick={auth.doSignOut}> sign out </a>
    </div>
  )
}

HomePage.contextTypes = {
  authUser: PropTypes.object
}

const authCondition = authUser => authUser !== null

export default withAuthorization(authCondition)(HomePage)
