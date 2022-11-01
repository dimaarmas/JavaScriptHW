import TeamsPage from "../../pages/TeamsPage";
import ConfigurationsPage from "../../pages/ConfigurationsPage";
import Navbar from "../Navbar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/configurations" element={<ConfigurationsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>

    </div>
  );
}

export default App;
