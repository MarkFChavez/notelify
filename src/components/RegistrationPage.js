import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'
import Footnote from './commons/Footnote'

class RegistrationPage extends Component {
  
  render () {
    return (
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-sm">

          <div className="bg-black text-white text-center py-2">
            <span className="text-4xl font-bold"> NOTELIFY </span>
          </div>

          <RegistrationForm />

          <Footnote />
        </div>
      </div>
    )
  }

}

export default RegistrationPage
