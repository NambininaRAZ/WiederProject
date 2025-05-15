import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'

interface AuthCheckProps {
  children: ReactNode
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
  const isAuthenticate = true
  const location = useLocation()

  if (!isAuthenticate) {
    return (
      <Navigate
        to="/auth/login"
        state={{
          form: location,
        }}
      />
    )
  }

  return <>{children}</>
}

export default AuthCheck
