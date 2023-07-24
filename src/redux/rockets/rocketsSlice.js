import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducer;
