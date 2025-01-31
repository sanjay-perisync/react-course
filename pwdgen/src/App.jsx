import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [buttonText, setButtonText] = useState("Copy");

  const passwordRef=useRef(null)
 
const generatePassword= useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed)str+="0123456789"
  if(charAllowed)str+="!@#$%^&*()_+"

  for(let i=1;i<=length;i++){
  const char = Math.floor(Math.random()*str.length + 1)
  pass+=str.charAt(char)
  }

  setPassword(pass)
},[length,numberAllowed,charAllowed])//dependency array


const copyPasswordToClipboard=()=>{
  navigator.clipboard.writeText(password)
  setButtonText("Copied!");
  passwordRef.current.select()

  setTimeout(()=>{
      setButtonText("Copy");
  },2000)
}

useEffect(()=>{
generatePassword()
},[length,numberAllowed,charAllowed])



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 bg-blue-500 ">
      <div className='flex items-center justify-between'>
      
        <img src="https://mabail6.github.io/images/hi.png" alt="" className='w-28 h-28 object-contain'/>
  
       
        <h1 className='text-white font-semibold text-[20px]  text-center my-5'>PASSWORD GENERATOR</h1>
      </div>
     
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />

      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 hover:bg-blue-900 text-white px-3 py-1 shrink-0'>{buttonText}</button>
    </div>

    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6} 
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=''
          id=''
          />
          <label htmlFor="length" className='text-white text-[16px] font-medium'>Length : {length}</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          className='cursor-pointer'
          onChange={(e) => {
            setNumberAllowed((prev)=>!prev)
          }}
          name=''
          id=''
          />
          <label htmlFor="number" className='text-white text-[16px] font-medium'>Numbers</label>
        </div>






        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          className='cursor-pointer'
          onChange={(e) => {
            setCharAllowed((prev)=>!prev)
          }}
          name=''
          id=''
          />
          <label htmlFor="charInput" className='text-white text-[16px] font-medium'>Character</label>
        </div>
    </div>


          

    </div>
  );
}

export default App;
