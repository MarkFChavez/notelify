import React from 'react'

const ErrorMessage = props => (
  <div className="py-4 px-4 bg-red-dark text-center border-l-4 border-r-4 border-black">
    <span className="text-white tracking-wide text-md">{props.message}</span>
  </div>
)

export default ErrorMessage
