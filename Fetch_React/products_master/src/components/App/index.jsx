import { getProducts } from '../../requests/products'
import { getUsers } from '../../requests/users';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import ProductsContainer from '../ProductsContainer';
import UsersContainer from '../UsersContainer';
import Productspage from '../../pages/Productspage'
import UsersPage from '../../pages/UsersPage';

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
        <Productspage />
        <UsersPage />
      </Context.Provider>
    </div>
  );
}

export default App;
