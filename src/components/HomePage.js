import React from 'react'
import PropTypes from 'prop-types'
import withAuthorization from './withAuthorization'
import { auth } from '../firebase'

const HomePage = (props, { authUser }) => {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="bg-black text-white px-2 py-2">
        <h1> NOTELIFY </h1>
      </div>

      <div className="bg-white border-4 border-black px-2 py-2">
        <div className="mb-3">
          <button className="border-4 border-black bg-black text-white font-bold py-2 px-2">
            ADD NOTE
          </button>
        </div>

        <div className="flex">
          <div className="w-2/3">
            <ul>
              <li> note 1 </li>
              <li> note 2 </li>
            </ul>
          </div>

          <div clasName="w-1/3">
            <div className="mb-3">
              Hello {authUser && authUser.email}.
              <a href="#" className="text-black font-bold" onClick={auth.doSignOut}> Logout </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomePage.contextTypes = {
  authUser: PropTypes.object
}

const authCondition = authUser => authUser !== null

export default withAuthorization(authCondition)(HomePage)
