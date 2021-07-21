import React, { useEffect, useState } from 'react'
import { Router, Route, Switch, Redirect } from 'wouter'
import { useDispatch } from 'react-redux'

import { firebase } from 'firebase/config'
import { login } from 'actions/login'

import JournalRoute from 'pages/Journal'
import AuthRouter from 'routes/AuthRouter'
import LoadingPage from 'pages/Loading'

const AppRoute = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        const { uid, displayName } = user
        dispatch(login({ uid, displayName }))
        setIsAuth(true)
      }
      setIsLoading(false)
    })
  }, [dispatch])

  if (isLoading) return <LoadingPage />

  return (
    <Router>
      <Switch>
        {
          isAuth
            ?
            <Route
              path="/"
              component={JournalRoute}
            />
            :
            <Route
              path="/auth/:auth?"
              component={AuthRouter}
            />
        }
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AppRoute
