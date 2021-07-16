import React from 'react'
import { Router, Route, Switch, Redirect } from 'wouter'

import JournalRoute from 'pages/Journal'
import AuthRouter from 'routes/AuthRouter'

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/auth/:auth?"
          component={ AuthRouter }
          />
        <Route
          path="/"
          component={ JournalRoute }
          />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AppRoute
