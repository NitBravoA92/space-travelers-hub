import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import RocketsContent from '../components/RocketsContent';
import { renderWithProviders } from "../helpers/helper-for-test";

describe("The RocketsContent component", () => {
  test("renders correctly into the DOM", () => {
    renderWithProviders(<RocketsContent />);
    
    const renderRocketItem = document.querySelector(".rocket-item");
    expect(renderRocketItem).toBeInTheDocument();
  });

  test("renders only one rocket item", () => {
    renderWithProviders(<RocketsContent />);
    
    const renderRocketItems = document.querySelectorAll(".rocket-item");
    expect(renderRocketItems).toHaveLength(1);
  });

  test("renders a reserved rocket", () => {
    renderWithProviders(<RocketsContent />);
    
    const renderRocketButton = screen.getByRole("button", {
      name: /Cancel Reservation/i,
    });
    expect(renderRocketButton).toBeInTheDocument();
  });

});
