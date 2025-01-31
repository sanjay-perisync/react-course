import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('black')

  return (
    <>
    <div className='w-full flex justify-center items-center h-screen duration-200' style={{backgroundColor:color}}>

   
     <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-5 text-white bg-white shadow-xl rounded-lg p-4'>
        <div className='text-slate-600 font-medium text-[20px]'>
          Click buttons to change the bg-color
        </div>
        <div className='flex justify-center items-center gap-5 '>
        <button className='bg-orange-500 px-6 py-2 text-[16px] font-bold rounded-md' onClick={()=>setcolor('orange')}>Orange</button>
         <button className='bg-red-500 px-6 py-2 text-[16px] font-bold rounded-md' onClick={()=>setcolor('red')}>Red</button>
         <button className='bg-green-500 px-6 py-2 text-[16px] font-bold rounded-md' onClick={()=>setcolor('green')}>Green</button>
      </div>
        </div>
       
     </div>
     </div>
    </>
  )
}

export default App
