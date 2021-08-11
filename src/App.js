import React from 'react'
import { Provider } from 'react-redux';
import AppRoute from 'routes/AppRoute';

import { store } from 'store/store'

function App() {
  return (
    <Provider store={ store }>
      <AppRoute />
    </Provider>
  );
}
// hola
export default App;
