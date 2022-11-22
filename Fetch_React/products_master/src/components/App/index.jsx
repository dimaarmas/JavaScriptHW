import { getProducts } from '../../requests/products'
import { getUsers } from '../../requests/users';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import Productspage from '../../pages/Productspage'
import UsersPage from '../../pages/UsersPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  useEffect(() => {
    getUsers(setUsers);
  }, [])

  console.log(users);



  return (
    <div>
      <Context.Provider value={{ products, users }}>
        <Nav />
        <Routes>
          <Route path='/products_page' element={<Productspage />} />
          <Route path='/users_page' element={<UsersPage />} />

        </Routes>

      </Context.Provider>
    </div>
  );
}

export default App;
