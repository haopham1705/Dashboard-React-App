import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from '~/components/GlobalStyles';
// import './index.css'
import { BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '~/context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
        <ThemeProvider> 
          <App />
        </ThemeProvider>
      </GlobalStyles>
    </Router>
  </React.StrictMode>
)
