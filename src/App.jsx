import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import NotFound from './components/NotFound';
import BlogPage from './pages/BlogPage';

function App() {

  return (
    <div className="App">
      <div className="header-menu">
      <h1>Dashboard List Photo</h1>
        <nav>
          <Link to="">Home</Link>
          <Link to="products">Team</Link>
          <Link to="blog">Team</Link>
        </nav>
      </div> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes> 
    </div>
  )
}

export default App;