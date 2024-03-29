import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
// import ProductPage from './pages/ProductPage';
import NotFound from './components/NotFound';
// import BlogPage from './pages/BlogPage';
import {publicRoutes} from '~/components/routes';

function App() {

  // add class "actived" into link visited
  const navLinkClass = ({isActive}) => {
    return isActive ? 'nav-link actived' : 'nav-link';
  }

  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<HomePage />} />
            {
              publicRoutes.map((route, index) => {
                return <Route className={navLinkClass} path={route.path} key={index} element={route.element} />
              })
            }
          <Route path='*' element={<NotFound />} />
        </Routes> 
    </div>
  )
}

export default App;


{/* <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='*' element={<NotFound />} /> */}