import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://api.spacexdata.com/v4/rockets';

const actionName = 'rockets/getAllRockets';

export const getAllRockets = createAsyncThunk(actionName, async (thunkAPI) => {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  rockets: [],
  isLoading: false,
  error: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.rockets.length === 0) {
          state.rockets = action.payload.map((rocket) => (
            {
              id: rocket.id,
              name: rocket.name,
              type: rocket.type,
              image: rocket.flickr_images[0],
            }
          ));
        }
      })
      .addCase(getAllRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default rocketsSlice.reducer;
