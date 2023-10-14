import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './app/store.js';
import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider 
       domain="dev-e7bdy5010rhdw052.us.auth0.com"
       clientId="fZikuS4TONpLwhj6zOn8RLEEcc71aLbz"
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
      >
      <App />
      </Auth0Provider>
    
    </Provider>
  </React.StrictMode>,
)
