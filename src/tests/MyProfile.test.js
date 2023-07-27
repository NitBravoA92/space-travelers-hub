import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyProfile from '../views/MyProfile';
import renderWithProviders from '../helpers/helper-for-test';

describe('The MyProfile component', () => {
  test('renders correctly into the DOM', () => {
    const { tree } = renderWithProviders(
      <MemoryRouter>
        <MyProfile />
      </MemoryRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("renders two <div> containers: 'My Missions' and 'My Rockets'", () => {
    renderWithProviders(
      <MemoryRouter>
        <MyProfile />
      </MemoryRouter>,
    );

    const renderMyMissionsContainer = document.querySelector('.my-missions');
    const renderMyRocketsContainer = document.querySelector('.my-rockets');
    const myMissionsTitle = screen.getByText(/My Missions/i);
    const myRocketsTitle = screen.getByText(/My Rockets/i);

    expect(renderMyMissionsContainer).toBeInTheDocument();
    expect(renderMyRocketsContainer).toBeInTheDocument();
    expect(myMissionsTitle).toBeInTheDocument();
    expect(myRocketsTitle).toBeInTheDocument();
  });

  test('should render the navigation menu with 3 links elements', () => {
    renderWithProviders(
      <MemoryRouter>
        <MyProfile />
      </MemoryRouter>,
    );

    const navigationMenu = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    expect(navigationMenu).toBeInTheDocument();
    expect(navLinks).toHaveLength(3);
  });
});
