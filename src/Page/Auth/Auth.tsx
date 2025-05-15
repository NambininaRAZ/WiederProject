import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div>
      Authentification
      <Outlet />
    </div>
  )
}

export default Auth
