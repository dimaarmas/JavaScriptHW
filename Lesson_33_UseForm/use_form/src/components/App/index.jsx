import Modal from "../Modal";
import { useState } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

function App() {


  const [modalActive, setModalActive] = useState(false);


  return (
    <div>
      <Context.Provider value={{ modalActive, setModalActive }}>
        <Link to='/registration'><button onClick={() => setModalActive(true)}>Open modal window</button></Link>
        <Modal />
      </Context.Provider>
    </div >
  );
}

export default App;
