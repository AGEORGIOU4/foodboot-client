import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Auth0Provider
    domain="foodboot.eu.auth0.com"
    clientId="YlvUPydGmFgScfKnME23uN4DFWbEJooy"
    redirectUri={window.location.origin} >

    <Provider store={store}>
      <App />
    </Provider>

  </Auth0Provider>,
  document.getElementById('root'),
)

serviceWorker.register();