import store from '../redux/store';
import { getAllMissions } from '../redux/missions/missionsSlice';

describe('The Missions state', () => {
  test('must be an object with an empty array initially', async () => {
    const initState = store.getState().missions;

    expect(initState).toEqual({ missions: [], isLoading: false, error: null });
  });

  test("should be updated with the Missions data when the 'getAllMissions' action is dispatched", async () => {
    const updateMissionsState = await store.dispatch(getAllMissions());
    const newState = store.getState().missions;

    expect(updateMissionsState.type).toEqual('missions/getAllMissions/fulfilled');
    expect(newState.missions).toBeTruthy();
  });
});
