import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'

class RegistrationPage extends Component {
  
  render () {
    return (
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-sm">

          <div className="bg-black text-white text-center py-2">
            <span className="text-4xl font-bold"> NOTELIFY </span>
          </div>

          <RegistrationForm />

          <p className="text-center text-xs font-bold">
            ©2017 <a href="https://markjoelchavez.com" className="text-black">markjoelchavez.com</a> | All rights reserved.
          </p>
        </div>
      </div>
    )
  }

}

export default RegistrationPage
