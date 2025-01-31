import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseBook, SellBook } from './reduxContainer/BookAction';

const BookContainer = () => {
  const totalBooks = useSelector(state => state.NumberOfBooks)
  const topseller = useSelector(state => state.bookName)
  const dispatch = useDispatch()
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-4'>

        <h1 className='text-[80px] text-blue-500'>BookContainer</h1>
        <p className='text-[20px] text-red-500 font-semibold'>total number of books : {totalBooks}</p>
        <p className='text-[20px] text-red-500 font-semibold'>Top selling book of this year is {topseller}</p>

        <button
          onClick={() => dispatch(purchaseBook())}
          className='px-6 py-2 bg-blue-500 text-white text-[20px] rounded-lg'
        >Buy a Book</button>


        <button
          onClick={() => dispatch(SellBook())}
          className='px-6 py-2 bg-blue-500 text-white text-[20px] rounded-lg'
        >Sell a Book</button>

      </div>
    </div>
  );
};

export default BookContainer;
