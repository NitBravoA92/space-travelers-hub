import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReservationItem from '../components/ReservationItem';

describe('The ReservationItem component', () => {
  test("renders into the DOM", () => {
    const component = renderer
      .create(
          <ReservationItem serviceName="Falcon 1" />
      ).toJSON();
    expect(component).toMatchSnapshot();
  });

  test("render a li element with the text 'Thaicom'", () => {
    const component = render(<ReservationItem serviceName="Thaicom" />);

    const liElement = component.container.querySelector('li');

    expect(liElement).toBeInTheDocument();
  });

});
