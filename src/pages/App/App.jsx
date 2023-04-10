import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/AdminNavBar";
import jwt_decode from "jwt-decode";
import "./App.css";

import StoresRouter from "./Routers/StoresRouter";
import UsersRouter from "./Routers/UsersRouter";
import ConsumersRouter from "./Routers/ConsumersRouter";
import MedicinesRouter from "./Routers/MedicinesRouter";
import PharmacistsRouter from "./Routers/PharmacistsRouter";

const AUTHENTICATE = true;

const ACCOUNT = {
  accountType: "Consumer",
  accountId: "authenticate: false",
};

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    if (token) {
      const decoded = jwt_decode(token);
      setUser(decoded);
    }
    if (!AUTHENTICATE) {
      setUser(ACCOUNT);
    }
  }, []);

  return (
    <div className="App">
      <div className="flex h-screen flex-col justify-between">
        {user &&
        (user.accountType === "Admin" || user.accountType === "Pharmacist") ? (
          <NavBar user={user} setUser={setUser} />
        ) : null}
        <div className="flex-1 overflow-y-scroll md:px-28 md:py-2">
          <Routes>
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/users/*" element={<UsersRouter user={user} />} />
            <Route path="/stores/*" element={<StoresRouter user={user} />} />
            <Route
              path="/consumers/*"
              element={<ConsumersRouter user={user} setUser={setUser} />}
            />
            <Route
              path="/medicines/*"
              element={<MedicinesRouter user={user} />}
            />
            <Route
              path="/pharmacists/*"
              element={<PharmacistsRouter user={user} />}
            />
            <Route
              path="/*"
              element={<ConsumersRouter user={user} setUser={setUser} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
