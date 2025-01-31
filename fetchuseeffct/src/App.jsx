import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((resp) => resp.json())
      .then((data) => setUsername(data));
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center items-center ">
       <h1 className='text-[60px] font-semibold text-black'>Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-center px-4">
       
        {username &&
          username.map((user) => {
           
            return (
            <div
              key={user.id}
              className="flex justify-center gap-4 flex-col bg-slate-800 font-bold text-[18px] text-white rounded-lg shadow-xl px-6 py-4"
            >
              <h1>User Info</h1>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          
          )
          })}


       
      </div>
    </div>
  );
}

export default App;
