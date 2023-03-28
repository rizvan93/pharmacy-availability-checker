import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? "" : <AuthPage setUser={setUser} />}
      {/* <Routes>
        <Route path="" element=""/>
        <Route path="" element=""/>
      </Routes> */}
    </div>
  );
}

export default App;
