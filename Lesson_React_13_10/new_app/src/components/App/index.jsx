import '../../style.css'
import AboutUs from '../AboutUs';
import Contact from '../Contacts';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Services from '../Services';

function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
