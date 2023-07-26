import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AppLogo from '../components/AppLogo';

describe('The AppLogo component', () => {
  test('renders into the DOM correctly', () => {
    const component = renderer
      .create(<AppLogo />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should display the text: Space Travelers\' Hub', () => {
    const component = render(<AppLogo />);
    
    const expectedText = 'Space Travelers\' Hub';

    expect(component.container).toHaveTextContent(expectedText);
  });

  test('should display an image', () => {
    const component = render(<AppLogo />);

    const logoImage = component.container.querySelector('img');

    expect(logoImage).toHaveAttribute('src', 'logo.png');
    expect(logoImage).toHaveAttribute('alt', 'Space Travelers\' Hub');
  });
});
