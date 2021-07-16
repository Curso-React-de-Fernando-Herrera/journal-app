import React from 'react'
import { Redirect, Route, Switch } from 'wouter'

import Login from 'pages/Login'
import Register from 'pages/Register'

const AuthRouter = () => {
  return (
    <Switch>
      <Route
        path="/auth/login"
        component={ Login }
      />
      <Route
        path="/auth/register"
        component={ Register }
      />
      <Redirect to="/auth/register" />
    </Switch>
  )
}

export default AuthRouter
