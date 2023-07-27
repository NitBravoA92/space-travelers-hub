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
  error: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addReserve: (state, action) => {
      const newRocketState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      state.rockets = newRocketState;
    },
    cancelReserve: (state, action) => {
      const newRocketState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = newRocketState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRockets.pending, (state) => {
        if (state.rockets.length === 0) state.isLoading = true;
      })
      .addCase(getAllRockets.fulfilled, (state, action) => {
        if (state.rockets.length === 0) {
          state.isLoading = false;
          state.rockets = action.payload.map((rocket) => (
            {
              id: rocket.id,
              name: rocket.name,
              description: rocket.description,
              image: rocket.flickr_images[0],
            }
          ));
        }
      })
      .addCase(getAllRockets.rejected, (state, action) => {
        if (state.rockets.length === 0) {
          state.isLoading = false;
          state.error = action.payload;
        }
      });
  },
});

export const { addReserve, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
