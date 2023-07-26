import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import MissionItem from "../components/MissionItem";
import { renderWithProviders } from "../helpers/helper-for-test";

describe("The MissionItem component", () => {
  const mockData = {
    mission_id: "9D1B7E0",
    mission_name: "Telstar 19V",
    description:
      "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited.",
  };

  test("renders correctly into the DOM", () => {
    const { tree } = renderWithProviders(
      <table>
        <tbody>
          <MissionItem mission={mockData} />
        </tbody>
      </table>
    );
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly into the DOM showing the text: 'Telstar 19V' as the mission title", () => {
    renderWithProviders(
      <table>
        <tbody>
          <MissionItem mission={mockData} />
        </tbody>
      </table>
    );

    const missionTitle = screen.getByText(/Telstar 19V/i);

    expect(missionTitle).toBeInTheDocument();
  });

  test("renders the text 'Not a member' when the user doesn't have the mission joined", () => {
    renderWithProviders(
      <table>
        <tbody>
          <MissionItem mission={mockData} />
        </tbody>
      </table>
    );

    const grayBadge = screen.getByText(/Not a member/i);
    const badgeClasses = grayBadge.className;

    expect(grayBadge).toBeInTheDocument();
    expect(badgeClasses).toMatch(/badge badge-gray/i);
  });

  test("renders a button with the text 'Join Mission'", () => {
    renderWithProviders(
      <table>
        <tbody>
          <MissionItem mission={mockData} />
        </tbody>
      </table>
    );

    const joinButton = screen.getByRole("button", {
      name: /Join Mission/i,
    });
    const buttonClasses = joinButton.className;

    expect(joinButton).toBeInTheDocument();
    expect(buttonClasses).toMatch(/btn btn-gray/i);
  });

});
