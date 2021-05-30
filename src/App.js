import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login";
import Logout from "./components/Logout";
import LoginHooks from "./components/LoginHooks";
import LogoutHooks from "./components/LogoutHooks";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login setUser={setUser} />
      <br />
      <Logout />
      <br />
      <h2>The Hooks way</h2>
      <LoginHooks setUser={setUser} />
      <LogoutHooks />
      {user ? (
        <div className="infoUser">
          <img className="avatarGoogle" src={user.imageUrl} alt={user.name} />
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
