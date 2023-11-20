// import {createRoot} from 'react-dom/client'
// import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css';


// createRoot(document.getElementById('root')).render(
//     <App />
// )

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-drthkwplyxwme76i.us.auth0.com"
    clientId="qwSi2LjNzCBZHQPzIdfzW7l6PuwxVpYQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);