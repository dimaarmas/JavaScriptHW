import { getProducts } from '../../requests/products'
import { getUsers } from '../../requests/users';
import { getPosts } from '../../requests/posts';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import Productspage from '../../pages/Productspage'
import UsersPage from '../../pages/UsersPage';
import PostsPage from '../../pages/PostsPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  useEffect(() => {
    getUsers(setUsers);
  }, [])

  useEffect(() => {
    getPosts(setPosts)
  }, [])


  const createNewUser = user => setUsers(prev => [...prev, user]);
  const createNewProduct = user => setProducts(prev => [...prev, user]);


  return (
    <div>
      <Context.Provider value={{ products, users, posts, createNewUser, createNewProduct }}>
        <Nav />
        <Routes>
          <Route path='/products_page' element={<Productspage />} />
          <Route path='/users_page' element={<UsersPage />} />
          <Route path='/posts_page' element={<PostsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
