import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from '@testing-library/react';
import RocketsContent from '../components/RocketsContent';
import renderWithProviders from '../helpers/helper-for-test';

describe('The RocketsContent component', () => {
  test('renders correctly into the DOM', () => {
    const { tree } = renderWithProviders(<RocketsContent />);

    expect(tree).toMatchSnapshot();
  });

  test('renders only one rocket item', () => {
    renderWithProviders(<RocketsContent />);

    const renderRocketItems = document.querySelectorAll('.rocket-item');
    expect(renderRocketItems).toHaveLength(1);
  });

  test('renders a reserved rocket', () => {
    renderWithProviders(<RocketsContent />);

    const renderRocketButton = screen.getByRole('button', {
      name: /Cancel Reservation/i,
    });
    expect(renderRocketButton).toBeInTheDocument();
  });

  test("display the button 'Reserve Rocket' when user clicks on the 'Cancel Reservation' Button", async () => {
    const { tree } = renderWithProviders(<RocketsContent />);
    const cancelButton = tree.findByText(/Cancel Reservation/i);

    fireEvent.click(await cancelButton);

    const reserveRocketButton = screen.getByText(/Reserve Rocket/i);
    const buttonClasses = reserveRocketButton.className;

    expect(reserveRocketButton).toBeInTheDocument();
    expect(buttonClasses).toMatch(/btn btn-blue/i);
  });
});
