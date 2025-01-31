import useInternetStatus from './useInternetStatus'
// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const isOnline=useInternetStatus()

  return (
   <div className='bg-white px-6 py-4 rounded-xl shadow-xl '>
    <div className='flex items-center gap-5'>
    <img src="src/img/sanjay.jpeg" alt=""  className='h-16 w-16 rounded-full object-cover'/>
    <div className=''>
      <h1 className='text-[24px] font-semibold'>Sanjay</h1>
      <h1 className='text-sm'>{isOnline ? "User is Online":"User is Offline"}</h1>
    </div>
    
    </div>
    
   </div>
  )
}

export default App
