import Modal from "../Modal";
import { useState } from 'react'
import { Context } from '../../context'

function App() {


  const [modalActive, setModalActive] = useState(false);


  return (
    <div>
      <Context.Provider value={{ modalActive, setModalActive }}>
        <button onClick={() => setModalActive(true)}>Open modal window</button>
        <Modal />
      </Context.Provider>

      {/* <FormItem
        title='Registration'
        button={{ submit: 'Registration', redirect: 'Login' }}
        infoText={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
        formType={'registration'}
      />
      <FormItem
        title='Login'
        button={{ submit: 'Login', redirect: 'Registration' }}
        infoText={'Reset password'}
        formType={'login'}
      />
      <FormItem
        title='Reset password'
        button={{ submit: 'Send' }}
        infoText={'The temporary password is valid for 24 hours.'}
        infoText_2={'To receive a temporary password, you must enter the email address you provided during registration.'}
      /> */}
    </div >
  );
}

export default App;
