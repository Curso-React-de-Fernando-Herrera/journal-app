import { Redirect, Route } from 'wouter'
import JournalRoute from 'pages/Journal'

export const PrivateRoute = () => {

  return <>
    <Route
      path="/"
      component={JournalRoute}
    />
    <Redirect to="/" />
  </>

}
