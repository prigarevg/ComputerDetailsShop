import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
    category: null,
    sortBy: {
      type: 'rating',
      order: 'desc',
    },
  };
  
  const filtersSlice = createSlice ({
      name: 'filters',
      initialState,
      reducers: {
        setSortBy:(state, action)=>{
            return {
                ...state,
                sortBy: action.payload,
              };
        },
        setCategory:(state, action)=>{
            return {
                ...state,
                category: action.payload,
              };
        }
    }
  })
  
  export const{
    setSortBy,
    setCategory,
  }= filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;