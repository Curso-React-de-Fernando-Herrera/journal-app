import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from 'reducers/authReducer'
import { errorReducer } from 'reducers/errorReducers'
import { journalReducer } from 'reducers/journalReducer'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const LIST_REDUCERS = combineReducers({
  auth: authReducer,
  errorUI: errorReducer,
  journal: journalReducer,
})

export const store = createStore(
  LIST_REDUCERS,
  composeEnhancers(applyMiddleware(thunk))
)
