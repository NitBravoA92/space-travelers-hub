import '@testing-library/jest-dom/extend-expect';
import JoinedMissions from '../components/JoinedMissions';
import renderWithProviders from '../helpers/helper-for-test';

describe('The JoinedMissions component', () => {
  test('renders into the DOM', () => {
    const { tree } = renderWithProviders(<JoinedMissions />);

    expect(tree).toMatchSnapshot();
  });

  test('renders an empty <ul> element when user does not have any Missions joined', () => {
    renderWithProviders(<JoinedMissions />);

    const missionsJoined = document.querySelectorAll('li');

    expect(missionsJoined).toHaveLength(0);
  });
});
