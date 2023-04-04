import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import jwt_decode from "jwt-decode";
import "./App.css";

import StoresRouter from "./Routers/StoresRouter";
import UsersRouter from "./Routers/UsersRouter";
import ConsumersRouter from "./Routers/ConsumersRouter";
import MedicinesRouter from "./Routers/MedicinesRouter";
import PharmacistsRouter from "./Routers/PharmacistsRouter";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    setUser(decoded);
  }, []);

  return (
    <div className="App">
      <div>
        <NavBar user={user} />
        <br />
        <Routes>
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
          <Route path="/users/*" element={<UsersRouter user={user} />} />
          <Route path="/stores/*" element={<StoresRouter user={user} />} />
          <Route
            path="/consumers/*"
            element={<ConsumersRouter user={user} />}
          />
          <Route
            path="/medicines/*"
            element={<MedicinesRouter user={user} />}
          />
          <Route
            path="/pharmacists/*"
            element={<PharmacistsRouter user={user} />}
          />
          <Route path="/*" element={<ConsumersRouter user={user} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
