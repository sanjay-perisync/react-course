import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');


  const handleEditClick = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };


  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id, newText: editText.trim() }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <div
            className="mt-4 flex justify-between w-[360px] gap-4 items-center bg-slate-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Edit Text */}
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-700 text-white px-2 py-1 rounded outline-none w-full"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}



            <div className="flex gap-2">
              {/* Update Button */}
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-700 py-1 px-3 rounded hover:bg-green-600 font-semibold"
                >
                  OK
                </button>
              ) : 
              
              
              (
                <button
                  onClick={() => handleEditClick(todo.id, todo.text)}
                  className="text-white bg-indigo-500 py-1 px-3 rounded hover:bg-indigo-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </button>
              )}

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Todos;
