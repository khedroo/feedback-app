import React from 'react'

function Button({type, children, version, isdisabled, }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isdisabled}>{children}</button>
  )
}

export default Button