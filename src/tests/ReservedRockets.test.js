import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import ReservedRockets from '../components/ReservedRockets';
import renderWithProviders from '../helpers/helper-for-test';

describe('The ReservedRockets component', () => {
  test('renders correctly into the DOM', () => {
    const { tree } = renderWithProviders(<ReservedRockets />);

    expect(tree).toMatchSnapshot();
  });

  test("renders the text: 'Falcon 1' when the user has it as a rocket reserved", () => {
    renderWithProviders(<ReservedRockets />);

    const rocketTitle = screen.getByText(/Falcon 1/i);

    expect(rocketTitle).toBeInTheDocument();
  });
});
