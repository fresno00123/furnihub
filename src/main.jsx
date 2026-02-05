import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../i18n.js'
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import {Auth} from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-cw2ilrh5dvxv78e0.us.auth0.com"
      clientId="QZEtutHXYRM9bYde8PyIvnEbYDUjKbSD"
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