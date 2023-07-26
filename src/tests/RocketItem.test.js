import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import RocketItem from '../components/RocketItem';
import { renderWithProviders } from "../helpers/helper-for-test";

describe("The RocketItem component", () => {
  const testingData = {
    id: "1",
    name: "Falcon 1",
    description:
      "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.",
    image:
      "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
      reserved: true,
  };

  test("renders into the DOM", () => {
    const { tree } = renderWithProviders(<RocketItem rocket={testingData} />
    );
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly into the DOM showing the rocket title 'Falcon 1'", () => {
    renderWithProviders(<RocketItem rocket={testingData} />);

    const rocketItemTitle = document.querySelector(".rocket-item .title");

    expect(rocketItemTitle).toBeInTheDocument();
  });

  test('renders the rocket image when first rendered', () => {
    renderWithProviders(<RocketItem rocket={testingData} />);

    const rocketImage = screen.getByRole('img');
    expect(rocketImage).toBeInTheDocument();
  });

  test("renders a badge with the text 'reserved'", () => {
    renderWithProviders(<RocketItem rocket={testingData} />);

    const badge = screen.getByText(/reserved/i);
    const badgeClass = badge.className;
    
    expect(badge).toBeInTheDocument();
    expect(badgeClass).toMatch(/badge badge-blue/i);
  });

  test("renders a button with the text 'Cancel Reservation'", () => {
    renderWithProviders(<RocketItem rocket={testingData} />);

    const buttonElement = screen.getByRole("button", {
      name: /Cancel Reservation/i,
    });
    const buttonClass = buttonElement.className;

    expect(buttonElement).toBeInTheDocument();
    expect(buttonClass).toMatch(/btn btn-gray/i);
  });

});
