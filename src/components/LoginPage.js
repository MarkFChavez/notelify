import React, { Component } from 'react'

class LoginPage extends Component {

  render () {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <h1> NOTELIFY </h1>

          <form className="bg-white border-4 border-black shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block font-bold mb-2 text-lg" for="username">
                EMAIL
              </label>
              <input className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" type="text" placeholder="What's your email?" />
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2 text-lg" for="password">
                PASSWORD
              </label>
              <input className="shadow appearance-none border-4 border-black w-full py-3 px-3 text-lg" type="password" placeholder="*********" />
            </div>

            <div className="text-center">
              <button type="submit" className="border-4 border-black hover:bg-black hover:text-white font-bold py-3 px-3 w-32" type="button">
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-xs font-bold">
            ©2017 <a href="https://markjoelchavez.com" className="text-black">markjoelchavez.com</a> | All rights reserved.
          </p>
        </div>
      </div>
    )
  }

}

export default LoginPage