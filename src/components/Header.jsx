import AppLogo from './AppLogo';
import '../assets/styles/Header.css';

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar">
        <AppLogo />
        <ul id="navigation" />
      </nav>
    </div>
  </header>
);

export default Header;
