import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../features/category/categorySlice';

function AddCat() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addCategoryHandler = (e) => {
    e.preventDefault();
    dispatch(addCategory(input));
    setInput('');
  };

  return (
    <form onSubmit={addCategoryHandler} className="space-x-3 mt-12 flex justify-center items-center gap-4 flex-wrap">
      <input
        type="text"
        className="bg-gray-800 rounded border w-full border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Category" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    
    </form>
  );
}

export default AddCat;