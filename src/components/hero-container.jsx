import { useCallback } from "react";
import StarIcons from "./star-icons";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./hero-container.css";

const HeroContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={`hero-container ${className}`}>
      <div className="hero-container-inner">
        <div className="frame-group">
          <div className="find-a-host-for-every-journey-parent">
            <b className="find-a-host-container">
              <span>{`Find a `}</span>
              <span className="host">host</span>
              <span> for every journey</span>
            </b>
            <h3 className="discover-the-best">
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className="form5">
            <div className="autocompletebasic">
              <input
                className="text2"
                placeholder="Accommodation"
                type="text"
              />
              <img className="iconhome" alt="" src="/iconhome.svg" />
            </div>
            <div className="grouped">
              <StarIcons label="Check-in" />
              <StarIcons label="Check-out" propMinWidth="63px" />
              <div className="star-icons1">
                <input className="label1" placeholder="Guest" type="text" />
                <img className="iconuser" alt="" src="/iconuser.svg" />
              </div>
            </div>
            <button className="search-button" onClick={onSearchButtonClick}>
              <img className="iconsearch" alt="" src="/iconsearch.svg" />
              <div className="button2">Search</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
