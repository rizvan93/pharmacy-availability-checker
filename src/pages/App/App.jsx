import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import CreateStorePage from "../Stores/Create/CreateStorePage";
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
      </Routes>
    </div>
  );
}

export default App;
