import AppLogo from './AppLogo';
import MenuLink from './MenuLink';
import '../assets/styles/Header.css';

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar">
        <AppLogo />
        <ul id="navigation">
          <MenuLink url="/rockets" pageName="Rockets" />
          <MenuLink url="/missions" pageName="Missions" />
          <MenuLink url="/my-profile" pageName="My Profile" />
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
