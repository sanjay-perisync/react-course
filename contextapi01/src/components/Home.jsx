import React, { useContext } from "react";
import { LoginContext } from "../App";

const Home = () => {
  const { isLoggedIn, onLogin, onLogout } = useContext(LoginContext);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
      <h2 className="text-lg font-semibold mb-4">{isLoggedIn ? "Welcome, Sanjay" : "Please Log In"}</h2>
      {isLoggedIn ? (
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={onLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={onLogin}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
