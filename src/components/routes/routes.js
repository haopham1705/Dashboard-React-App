import config from '~/config';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import NotFound from './components/NotFound';
import BlogPage from './pages/BlogPage';


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.product, component: ProductPage },
    { path: config.routes.blog, component: BlogPage }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };