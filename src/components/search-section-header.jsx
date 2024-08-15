import PropTypes from "prop-types";
import "./search-section-header.css";

const SearchSectionHeader = ({ className = "" }) => {
  return (
    <div className={`search-section-header ${className}`}>
      <div className="stays-nearby-parent">
        <h3 className="stays-nearby">Stays nearby:</h3>
        <b className="toronto-ontario">Toronto Ontario</b>
      </div>
      <div className="layout-selection">
        <div className="bento-menu-1-wrapper">
          <img className="bento-menu-1-icon" alt="" src="/bento-menu1.svg" />
        </div>
        <div className="map-wrapper">
          <img className="map-icon" alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

SearchSectionHeader.propTypes = {
  className: PropTypes.string,
};

export default SearchSectionHeader;
