import { useState } from 'react' 
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '~/pages/HomePage'
import ProductPage from './pages/ProductPage';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className="App">
      <div className="header-menu">
      <h1>Dashboard</h1>
        <nav>
          <Link to="invoices">Invoices</Link>{" "}
          <Link to="team">Team</Link>
        </nav>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;