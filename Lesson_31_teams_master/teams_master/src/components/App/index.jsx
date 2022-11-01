import TeamsPage from "../../pages/TeamsPage";
import ConfigurationsPage from "../../pages/ConfigurationsPage";
import Navbar from "../Navbar";
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";

function App() {

  const [teams, setTeams] = useState([]);

  const add_team = (team_value) => {
    setTeams([...teams, { value: team_value, label: team_value }])
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/configurations" element={<ConfigurationsPage teams={teams} add_team={add_team} />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Routes>

    </div>
  );
}

export default App;
