import React from 'react'
import PropTypes from 'prop-types'

const HomePage = (props, { authUser }) => {
  return (
    <div>
      welcome to home page
    </div>
  )
}

HomePage.contextTypes = {
  authUser: PropTypes.object
}

export default HomePage