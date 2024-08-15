import { useMemo } from "react";
import PropTypes from "prop-types";
import "./listing-item1.css";

const ListingItem1 = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  propDisplay,
  propMinWidth,
  onListingItemContainerClick,
}) => {
  const listingTitleStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`listing-item ${className}`}
      onClick={onListingItemContainerClick}
    >
      <img className="listing-image-icon" alt="" src={listingImage} />
      <div className="superhost-tag">
        <img className="superhost-icon" alt="" src="/superhost-icon.svg" />
        <div className="superhost">Superhost</div>
      </div>
      <div className="wrapper-heart-icon">
        <img
          className="heart-icon"
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className="item-details">
        <div className="listing-info">
          <div className="listing-cont">
            <b className="listing-title" style={listingTitleStyle}>
              {listingTitle}
            </b>
            <div className="listing-subtitle">{listingSubtitle}</div>
          </div>
          <div className="rating-cont">
            <b className="rating">{rating}</b>
            <img
              className="star-icon"
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="price-per-night">
            <b className="price">{price}</b>
            <div className="night">/night</div>
          </div>
          <div className="best-time">
            <img
              className="trend-icon"
              loading="lazy"
              alt=""
              src="/trend-icon@2x.png"
            />
            <a className="price-chart">Price chart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingItem1.propTypes = {
  className: PropTypes.string,
  listingImage: PropTypes.string,
  listingTitle: PropTypes.string,
  listingSubtitle: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onListingItemContainerClick: PropTypes.func,
};

export default ListingItem1;
