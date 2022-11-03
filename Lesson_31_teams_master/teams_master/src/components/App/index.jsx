import TeamsPage from "../../pages/TeamsPage";
import ConfigurationsPage from "../../pages/ConfigurationsPage";
import Navbar from "../Navbar";
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import { Context } from "../../context";

function App() {

  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);

  const add_team = (team_value) => {
    setTeams([...teams, { value: team_value, label: team_value }])
  }

  const add_user = (name_value, team_value) => {
    setUsers([...users, {
      id: Date.now(),
      name: name_value,
      team: team_value
    }])
  }

  return (
    <div>
      <Context.Provider value={{ teams, add_team, users, add_user }}>
        <Navbar />
        <Routes>
          <Route path="/configurations" element={<ConfigurationsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
