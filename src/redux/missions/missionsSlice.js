import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'https://api.spacexdata.com/v3/missions';

const actionName = 'missions/getAllMissions';

export const getAllMissions = createAsyncThunk(actionName, async (thunkAPI) => {
  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.missions.length === 0) {
          state.missions = action.payload.map((mission) => (
            {
              mission_id: mission.mission_id,
              mission_name: mission.mission_name,
              description: mission.description,
            }
          ));
        }
      })
      .addCase(getAllMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default missionsSlice.reducer;
