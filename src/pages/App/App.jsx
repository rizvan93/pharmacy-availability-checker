import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import CreateStorePage from "../Stores/Create/CreateStorePage";
import EditStorePage from "../Stores/Edit/EditStorePage";
import StoresPage from "../Stores/Index/StoresPage";
import MedicinesPage from "../Medicine/Index/MedicinesPage";
import AddMedicinePage from "../Medicine/Create/AddMedicinePage";
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
        <Route path="/medicines" element={<MedicinesPage />} />
        <Route path="/medicines/new" element={<AddMedicinePage />} />
      </Routes>

    </div>
  );
}

export default App;
