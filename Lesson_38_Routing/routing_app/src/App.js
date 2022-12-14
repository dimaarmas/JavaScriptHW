import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from './components/Layout';
import ProductsPage from './pages/ProductsPage';
import ProductsDescriptionPage from './pages/ProductsDescriptionPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about_page" element={<AboutPage />} />
          <Route path="categories_page" element={<CategoriesPage />} />
          <Route path="categories_page/:category" element={<ProductsPage />} />
          <Route path='product/:id' element={<ProductsDescriptionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
