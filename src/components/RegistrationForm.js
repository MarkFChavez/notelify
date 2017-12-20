import React from 'react'
import { Link }  from 'react-router-dom'
import * as routes from '../config/routes'

const RegistrationForm = ({ email, password, confirmPassword, loading, onFieldChanged, onSubmit }) => (
  <form onSubmit={onSubmit} className="bg-white border-4 border-black shadow-md px-8 pt-6 pb-8 mb-4">

    <div className="mb-4">
      <label className="block font-bold mb-2 text-lg" htmlFor="email">
        EMAIL
      </label>
      <input 
        type="text" 
        value={email}
        onChange={(e) => onFieldChanged("email", e)}
        className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" 
        placeholder="Your email address" />
    </div>

    <div className="mb-4">
      <label className="block font-bold mb-2 text-lg" htmlFor="email">
        PASSWORD
      </label>
      <input 
        type="password" 
        value={password}
        placeholder="Your password"
        onChange={(e) => onFieldChanged("password", e)}
        className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" />
    </div>

    <div className="mb-4">
      <label className="block font-bold mb-2 text-lg" htmlFor="email">
        CONFIRM PASSWORD
      </label>
      <input 
        type="password" 
        value={confirmPassword}
        placeholder="Again, your password"
        onChange={(e) => onFieldChanged("confirmPassword", e)}
        className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" />
    </div>

    <div className="text-center">
      {
        loading
          ? <span className="font-bold text-xl">PLEASE WAIT...</span>
          : (<button type="submit" className="border-4 border-black hover:bg-black hover:text-white font-bold py-3 px-3 w-32">
              REGISTER
            </button>)
      }
    </div>

    <div className="mt-4 text-right">
      <Link to={routes.LOGIN}> 
        <span className="text-black font-bold">sign in here</span> 
      </Link>
    </div>

  </form>
)

export default RegistrationForm
