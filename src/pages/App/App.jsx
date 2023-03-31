import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import ConsumersMainPage from "../Consumers/Index/ConsumersMainPage";
import MedAvailability from "../Consumers/Index/MedAvailability";
import PharmAvailability from "../Consumers/Index/PharmAvailability";
import CreateStorePage from "../Stores/Create/CreateStorePage";
import EditStorePage from "../Stores/Edit/EditStorePage";
import StoresPage from "../Stores/Index/StoresPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(1);

  return (
    <div className="App">
      {user ? "" : <AuthPage setUser={setUser} />}
      <Routes>
        {/* <Route path="" element=""/> */}
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/stores/new" element={<CreateStorePage />} />
        <Route path="/stores/:id/edit" element={<EditStorePage />} />
        <Route path="/consumers" element={<ConsumersMainPage />} />
        <Route path="/consumers/pharmacists" element={<PharmAvailability />} />
        <Route path="/consumers/medicines" element={<MedAvailability />} />
      </Routes>
    </div>
  );
}

export default App;
