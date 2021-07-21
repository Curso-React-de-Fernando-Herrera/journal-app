import React from 'react'
import { Route, Switch, Redirect } from 'wouter'

import Journal from 'pages/Journal'

const JournalRoute = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={Journal}
      />
      <Redirect to="/" />
    </Switch>
  )
}

export default JournalRoute
