import { createSlice } from '@reduxjs/toolkit';
import { detailsControl } from '../../App';
const initialState = {
  items: [],
  isLoaded: false,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.items = action.payload;
      state.isLoaded = true;
    },
    setLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setDetails, setLoaded } = detailsSlice.actions;

export const detailsReducer = detailsSlice.reducer;
export const fetchPizzas = (sortBy, category) => async (dispatch) => {
  dispatch(setLoaded(false));

  const response = await detailsControl.getAll({ sortBy, category });
  console.log(response);
  dispatch(setDetails(response.data.result));
};
