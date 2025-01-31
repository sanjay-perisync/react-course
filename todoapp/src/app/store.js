import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import categoryReducer from '../features/category/categorySlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    category: categoryReducer,
  },
});