import { Redirect, Route } from 'wouter'
import AuthRouter from './AuthRouter'

export const PublicRoute = () => {
  return <>
    <Route
      path="/auth/:auth?"
      component={AuthRouter}
    />
    <Redirect to="/auth/login" />
  </>
}
