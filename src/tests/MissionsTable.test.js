import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from '@testing-library/react';
import MissionsTable from '../components/MissionsTable';
import renderWithProviders from '../helpers/helper-for-test';

describe('The MissionsTable component', () => {
  test('renders correctly into the DOM', () => {
    const { tree } = renderWithProviders(<MissionsTable />);

    expect(tree).toMatchSnapshot();
  });

  test('renders one mission item in the table', () => {
    renderWithProviders(<MissionsTable />);

    const missionItems = document.querySelectorAll('table tbody tr');
    expect(missionItems).toHaveLength(1);
  });

  test("display the badge 'Active Member' when user clicks on the 'Join Mission' Button", async () => {
    const { tree } = renderWithProviders(<MissionsTable />);
    const joinButton = tree.findByText(/Join Mission/i);

    fireEvent.click(await joinButton);

    const activeMemberBadge = screen.getByText(/Active member/i);
    const badgeClasses = activeMemberBadge.className;

    expect(activeMemberBadge).toBeInTheDocument();
    expect(badgeClasses).toMatch(/badge badge-blue/i);
  });
});
