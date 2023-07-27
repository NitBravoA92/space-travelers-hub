import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Rockets from '../views/Rockets';
import { renderWithProviders } from "../helpers/helper-for-test";

describe("The Rockets component", () => {
  test("renders into the DOM correctly", () => {
    const {tree } = renderWithProviders(
      <MemoryRouter>
        <Rockets />
      </MemoryRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render the navigation menu with the 'Rockets', 'Missions' and 'My Profile' Links", () => {
    renderWithProviders(
      <MemoryRouter>
        <Rockets />
      </MemoryRouter>,
    );

    const navigationMenu = document.querySelector("nav");
    const rocketsLink = screen.getByText(/Rockets/i);
    const missionsLink = screen.getByText(/Missions/i);
    const myProfileLink = screen.getByText(/My Profile/i);

    expect(navigationMenu).toBeInTheDocument();
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(myProfileLink).toBeInTheDocument();
  });

  test("renders the rockets main content", () => {
    renderWithProviders(
      <MemoryRouter>
        <Rockets />
      </MemoryRouter>,
    );

    const renderRocketsContent = document.querySelector(".rockets-list");
    expect(renderRocketsContent).toBeInTheDocument();
  });

});
