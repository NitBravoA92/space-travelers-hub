import store from '../redux/store';
import { getAllRockets } from '../redux/rockets/rocketsSlice';

describe('The Rockets state', () => {
  test('must be an object with an empty array initially', async () => {
    const initState = store.getState().rockets;

    expect(initState).toEqual({ rockets: [], isLoading: false, error: null });
  });

  test("should be updated with the Rockets data when the 'getAllRockets' action is dispatched", async () => {
    const updateRocketsState = await store.dispatch(getAllRockets());
    const newState = store.getState().rockets;

    expect(updateRocketsState.type).toEqual('rockets/getAllRockets/fulfilled');
    expect(newState.rockets).toBeTruthy();
  });
});
