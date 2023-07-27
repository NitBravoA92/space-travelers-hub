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
  reducers: {
    addReservedMission: (state, action) => {
      const newMissionState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      state.missions = newMissionState;
    },
    LeaveMission: (state, action) => {
      const newMissionState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      state.missions = newMissionState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMissions.pending, (state) => {
        if (state.missions.length === 0) state.isLoading = true;
      })
      .addCase(getAllMissions.fulfilled, (state, action) => {
        if (state.missions.length === 0) {
          state.isLoading = false;
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
        if (state.missions.length === 0) {
          state.isLoading = false;
          state.error = action.payload;
        }
      });
  },
});

export const { addReservedMission, LeaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
