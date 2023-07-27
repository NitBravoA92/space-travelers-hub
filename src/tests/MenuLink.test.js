import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MenuLink from '../components/MenuLink';

describe('The MenuLink component', () => {
  test("renders a link element (<a>) into the DOM with the title 'Rockets' ", () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <MenuLink url="/rockets" pageName="Rockets" />
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  describe('should render a link element (<a>) with', () => {
    test("the title 'Missions' and a link pointing to the Missions page", () => {
      const componentLink = render(
        <MemoryRouter>
          <MenuLink url="/missions" pageName="Missions" />
        </MemoryRouter>,
      );

      const linkElement = componentLink.container.querySelector('a');

      expect(componentLink.container).toHaveTextContent('Missions');
      expect(linkElement).toHaveAttribute('href', '/missions');
    });

    test("the title 'My Profile' and a link pointing to the My Profile page", () => {
      const componentLink = render(
        <MemoryRouter>
          <MenuLink url="/my-profile" pageName="My Profile" />
        </MemoryRouter>,
      );

      const link = componentLink.container.querySelector('a');

      expect(componentLink.container).toHaveTextContent('My Profile');
      expect(link).toHaveAttribute('href', '/my-profile');
    });
  });
});
