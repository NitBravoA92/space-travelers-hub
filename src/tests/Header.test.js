import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import AppLogo from '../components/AppLogo';
import MenuLink from '../components/MenuLink';
import Header from '../components/Header';

describe('The Header component', () => {
  test('renders into the DOM correctly', () => {
    const headerComponent = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      )
      .toJSON();
    expect(headerComponent).toMatchSnapshot();
  });

  test("should render a '<nav>' element for the navigation menu with 3 link (<a>) elements", () => {
    const component = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const navElement = component.container.querySelector('nav');
    const linksElements = component.container.querySelectorAll('.nav-item a');

    expect(navElement).toBeInTheDocument();
    expect(linksElements.length).toBe(3);
  });

  test("should render an '<img>' element with the class 'logo-image'", () => {
    const component = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const imgElement = component.container.querySelector('.logo-image');

    expect(imgElement).toBeInTheDocument();
  });

});
