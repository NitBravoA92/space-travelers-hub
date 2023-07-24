import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuLink = ({ url, pageName }) => {
  const navLinkStatus = ({ isActive, isPending }) => {
    if (isActive) return 'active';
    if (isPending) return 'pending';
    return null;
  };

  return (
    <li className="nav-item">
      <NavLink
        to={url}
        className={navLinkStatus}
      >
        {pageName}
      </NavLink>
    </li>
  );
};

MenuLink.propTypes = {
  pageName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;
