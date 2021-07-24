import React, { useEffect, useState } from 'react'
import { Router, Switch, Redirect } from 'wouter'
import { useDispatch } from 'react-redux'
import { firebase } from 'firebase/config'

import { login } from 'actions/login'

import { PrivateRoute } from 'routes/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute'
import LoadingPage from 'pages/Loading'
import { startLoadingNotes } from 'actions/journal'

const AppRoute = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {

    firebase.auth().onAuthStateChanged(async (user) => {
      setIsAuth(false)

      if (user?.uid) {
        const { uid, displayName } = user

        dispatch(login({ uid, displayName }))
        setIsAuth(true)

        dispatch(startLoadingNotes(uid))
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
            ? <PrivateRoute />
            : <PublicRoute />
        }
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AppRoute
