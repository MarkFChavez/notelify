import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'
import Footnote from './commons/Footnote'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

class RegistrationPage extends Component {

  constructor (props) {
    super(props)
    this.onFieldChanged = this.onFieldChanged.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = INITIAL_STATE
  }

  onFieldChanged (key, e) {
    this.setState({ [key]: e.target.value })
  }

  onSubmit (e) {
    console.log(this.state)
    e.preventDefault()
  }
  
  render () {
    const { name, email, password, confirmPassword } = this.state 

    return (
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-sm">

          <div className="bg-black text-white text-center py-2">
            <span className="text-4xl font-bold"> NOTELIFY </span>
          </div>

          <RegistrationForm
            onFieldChanged={this.onFieldChanged}
            onSubmit={this.onSubmit}
            name={name} 
            email={email} 
            password={password} 
            confirmPassword={confirmPassword} />

          <Footnote />
        </div>
      </div>
    )
  }

}

export default RegistrationPage
