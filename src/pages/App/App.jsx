import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import CreateStorePage from "../Stores/Create/CreateStorePage";
import EditStorePage from "../Stores/Edit/EditStorePage";
import StoresPage from "../Stores/Index/StoresPage";
import MedicinesPage from "../Medicine/Index/MedicinesPage";
import AddMedicinePage from "../Medicine/Create/AddMedicinePage";
import EditMedicineForm from "../Medicine/Edit/EditMedicineForm";
import UserPage from "../User/UserPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(1);

  return (
    <div className="App">
      {user ? "" : <AuthPage setUser={setUser} />}
      <Routes>
        {/* <Route path="" element=""/> */}
        <Route path="/users" element={<UserPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/stores/new" element={<CreateStorePage />} />
        <Route path="/stores/:id/edit" element={<EditStorePage />} />
        <Route path="/medicines" element={<MedicinesPage />} />
        <Route path="/medicines/new" element={<AddMedicinePage />} />
        <Route path="/medicines/:id/edit" element={<EditMedicineForm />} />
      </Routes>
    </div>
  );
}

export default App;
