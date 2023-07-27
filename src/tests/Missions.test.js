import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Missions from "../views/Missions";
import { renderWithProviders } from "../helpers/helper-for-test";

describe("The Missions component", () => {
  test("renders correctly into the DOM", () => {
    const { tree } = renderWithProviders(
      <MemoryRouter>
        <Missions />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  test("renders the Missions table with the main content", () => {
    renderWithProviders(
      <MemoryRouter>
        <Missions />
      </MemoryRouter>
    );

    const renderMissionsTable = document.querySelector("table");
    expect(renderMissionsTable).toBeInTheDocument();
  });

  test("should render the navigation menu with 3 links and a Logo", () => {
    renderWithProviders(
      <MemoryRouter>
        <Missions />
      </MemoryRouter>,
    );

    const navigationMenu = document.querySelector("nav");
    const menuLinks = document.querySelectorAll("nav ul li a");
    const appLogo = document.querySelector("nav img");

    expect(navigationMenu).toBeInTheDocument();
    expect(appLogo).toBeInTheDocument();
    expect(menuLinks).toHaveLength(3);
  });

});
