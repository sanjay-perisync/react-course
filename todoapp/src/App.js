import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import SideBar from './components/SideBar';
import AddCat from './components/AddCat';

function App() {
  return (
    <div className="App flex  h-screen bg-white dark:text-white dark:bg-slate-700">
      <div className='bg-indigo-300 min-w-auto p-4'>
        <AddCat />
        <SideBar />
      </div>
      <div className='flex flex-col justify-start items-center w-full bg-slate-700'>
        <div><h1 className='text-[40px] font-semibold'><span className='text-red-500'>ToDo</span>List</h1></div>
        <AddTodo />
        <Todos />
      </div>
    </div>

  );
}

export default App;
