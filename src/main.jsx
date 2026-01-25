import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../i18n.js'
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <Auth0Provider
      domain="dev-wqf62igbpscfokaq.us.auth0.com"
      clientId="fKXJI59KE9DN7ABV1h3xUzFvWWjkhGnc"
      authorizationParams={{ redirect_uri: window.location.origin }}
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
