import { getProducts } from '../../requests/products'
import { getUsers } from '../../requests/users';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import ProductsContainer from '../ProductsContainer';
import UsersContainer from '../UsersContainer';

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
        <ProductsContainer />
        <UsersContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
