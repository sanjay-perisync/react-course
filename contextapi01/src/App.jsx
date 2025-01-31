import React, { useState, createContext } from "react";
import Home from "./components/Home"; 


export const LoginContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, onLogin: handleLogin, onLogout: handleLogout }}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Authentication App</h1>
        <Home />
      </div>
    </LoginContext.Provider>
  );
};

export default App;
