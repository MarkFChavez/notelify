import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Footnote from './commons/Footnote'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'
import * as routes from '../config/routes'

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: null
}

class LoginPage extends Component {

  constructor (props) {
    super(props)

    this.onEmailChanged = this.onEmailChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = INITIAL_STATE
  }

  onEmailChanged (e) {
    this.setState({ email: e.target.value })
  }

  onPasswordChanged (e) {
    this.setState({ password: e.target.value })
  }

  onSubmit (e) {
    this.setState({ loading: true })

    auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(routes.HOME)
      })
      .catch(e => {
        this.setState({ ...INITIAL_STATE, error: "Invalid email or password." })
      })

    e.preventDefault()
  }

  render () {
    const { email, password, loading } = this.state

    return (
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-sm">

          <div className="bg-black text-white text-center py-2">
            <span className="text-4xl font-bold"> NOTELIFY </span>
          </div>

          {
            this.state.error &&
            <div className="py-4 px-4 bg-red-dark text-center border-l-4 border-r-4 border-black">
              <span className="text-white tracking-wide text-md">{this.state.error}</span>
            </div>
          }

          <LoginForm
            loading={loading}
            email={email}
            password={password}
            emailChanged={this.onEmailChanged}
            passwordChanged={this.onPasswordChanged}
            onSubmit={this.onSubmit} />

          <Footnote />
        </div>
      </div>
    )
  }

}

export default withRouter(LoginPage)
