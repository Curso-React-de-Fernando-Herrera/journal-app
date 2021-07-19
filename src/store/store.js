import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from 'reducers/authReducer'
import { errorReducer } from 'reducers/errorReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const LIST_REDUCERS = combineReducers({
  auth: authReducer,
  errorUI: errorReducer
})

export const store = createStore(
  LIST_REDUCERS,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)