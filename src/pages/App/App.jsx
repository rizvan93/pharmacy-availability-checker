import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import CreateStorePage from "../Stores/Create/CreateStorePage";
import EditStorePage from "../Stores/Edit/EditStorePage";
import StoresPage from "../Stores/Index/StoresPage";
import MedicinesPage from "../Medicine/Index/MedicinesPage";
import AddMedicinePage from "../Medicine/Create/AddMedicinePage";
import UserPage from "../User/UserPage";
import NavBar from "../../components/NavBar/NavBar";
import CreateUserPage from "../User/CreateUserPage";
import UserInfoPage from "../User/UserInfoPage";
import EditUserPage from "../User/EditUserPage";
import "./App.css";


function App() {
  const [user, setUser] = useState(1);

  return (
    <div className="App">
      {user ? "" : <AuthPage setUser={setUser} />}
      <div><NavBar user={user} />
      <br />
      <Routes>
        {/* <Route path="" element=""/> */}
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/new" element={<CreateUserPage />} />
        <Route path="/users/:id" element={<UserInfoPage />} />
        <Route path="/users/:id/edit" element={<EditUserPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/stores/new" element={<CreateStorePage />} />
        <Route path="/stores/:id/edit" element={<EditStorePage />} />
        <Route path="/medicines" element={<MedicinesPage />} />
        <Route path="/medicines/new" element={<AddMedicinePage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
