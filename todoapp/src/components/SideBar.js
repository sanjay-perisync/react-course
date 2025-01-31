import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCategory, updateCategory } from '../features/category/categorySlice';


function Categories() {
  const categories = useSelector((state) => state.category.categories); 
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (id, currentName) => {
    setEditId(id);
    setEditText(currentName);
  };

  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateCategory({ id, newName: editText.trim() }));
      setEditId(null);
      setEditText('');
    } 
  };


  



  return (
    <>
      <ul className="list-none">
        {categories.map((category) => (
          <div
            className="mt-4 flex justify-between w-[360px] gap-4 items-center bg-slate-800 px-4 py-2 rounded"
            key={category.id}
          >
            {/* Edit Text */}
            {editId === category.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-700 text-white px-2 py-1 rounded outline-none w-full"
              />
            ) : (
              <div className="text-white">{category.name}</div>
            )}

            {/* Buttons */}
            <div className="flex gap-2">
              {/* Update Button */}
              {editId === category.id ? (
                <button
                  onClick={() => handleUpdate(category.id)}
                  className="text-white bg-green-700 py-1 px-3 rounded hover:bg-green-600 font-semibold"
                >
                  OK
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(category.id, category.name)}
                  className="text-white bg-indigo-500 py-1 px-3 rounded hover:bg-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </button>
              )}

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeCategory(category.id))}
                className="text-white bg-red-500 py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>


              <button 
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        View
      </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Categories;