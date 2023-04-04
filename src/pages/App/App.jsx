import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

import StoresRouter from "./Routers/StoresRouter";
import UsersRouter from "./Routers/UsersRouter";
import ConsumersRouter from "./Routers/ConsumersRouter";
import MedicinesRouter from "./Routers/MedicinesRouter";
import PharmacistsRouter from "./Routers/PharmacistsRouter";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? "" : <AuthPage setUser={setUser} />}
      <div>
        <NavBar user={user} />
        <br />
        <Routes>
          <Route path="login" element={<AuthPage setUser={setUser} />} />
          <Route path="/users/*" element={<UsersRouter />} />
          <Route path="/stores/*" element={<StoresRouter />} />
          <Route path="/consumers/*" element={<ConsumersRouter />} />
          <Route path="/medicines/*" element={<MedicinesRouter />} />
          <Route path="/pharmacists/*" element={<PharmacistsRouter />} />
          <Route path="/*" element={<ConsumersRouter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
