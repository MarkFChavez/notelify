import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Header from './commons/Header'
import Footnote from './commons/Footnote'
import ErrorMessage from './commons/ErrorMessage'
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
      <div className="flex justify-center lg:items-center lg:h-screen p-2">
        <div className="w-full max-w-sm">

          <Header title="NOTELIFY" />

          {this.state.error && <ErrorMessage message={this.state.error} />}

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
