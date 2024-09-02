import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@emotion/react'
import theme from './themes/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
reportWebVitals()
