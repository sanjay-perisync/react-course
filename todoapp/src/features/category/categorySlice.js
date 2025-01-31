import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    categories: [] 
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
     
        addCategory: (state, action) => {
            const category = {
                id: nanoid(), 
                name: action.payload 
            };
            state.categories.push(category);
        },

        removeCategory: (state, action) => {
            state.categories = state.categories.filter(
                (category) => category.id !== action.payload
            );
        },
   
        updateCategory: (state, action) => {
            const { id, newName } = action.payload;
            const category = state.categories.find(
                (category) => category.id === id
            );
            if (category) {
                category.name = newName;
            }
        }
    }
});


export const { addCategory, removeCategory, updateCategory } = categorySlice.actions;


export default categorySlice.reducer;