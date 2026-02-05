import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../i18n.js'
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation='localstorage'
      useRefreshTokens={true}
    >
      <CartProvider>
        <Toaster position='top-right' reverseOrder={false} />
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartProvider>
    </Auth0Provider>
  </StrictMode>,
)