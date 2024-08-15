import PropTypes from "prop-types";
import "./header.css";

const Header = ({
  className = "",
  notifications,
  avatar,
  showLoginSection,
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
        <div className="nav-links">
          <a className="home" >Home</a>
          <a className="stays">Stays</a>
          <a className="become-a-host">Become a host</a>
        </div>
        {showLoginSection && (
          <div className="login-section">
            <img
              className="notifications-icon"
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img className="avatar-icon" loading="lazy" alt="" src={avatar} />
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.string,
  avatar: PropTypes.string,
  showLoginSection: PropTypes.bool,
};

export default Header;
