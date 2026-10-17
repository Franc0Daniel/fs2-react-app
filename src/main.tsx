import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider, type AuthProviderProps } from 'react-oidc-context'
import './index.css'
import App from './App.tsx'

const cognitoAuthConfig: AuthProviderProps = {
  // En local, VITE_OIDC_* (ver .env.development.local) sobrescriben estos valores.
  authority:
    import.meta.env.VITE_OIDC_AUTHORITY ??
    'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_wK31TfoIN',
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID ?? '3vlbsrblbgrf9ig1uh6r8vhgbe',
  redirect_uri:
    import.meta.env.VITE_OIDC_REDIRECT_URI ??
    'https://d84l1y8p4kdic.cloudfront.net',
  response_type: 'code',
  scope: 'email openid phone',
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname)
  },
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)