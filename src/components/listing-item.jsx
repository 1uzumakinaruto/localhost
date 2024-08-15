import { useMemo } from "react";
import PropTypes from "prop-types";
import "./listing-item.css";

const ListingItem = ({
  className = "",
  image,
  heartIcon,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  trendIcon,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const listingTitle1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={`listing-item1 ${className}`}>
      <img className="image-icon3" alt="" src={image} />
      <div className="superhost-tag1">
        <img className="superhost-icon1" alt="" src="/superhost-icon.svg" />
        <div className="superhost1">Superhost</div>
      </div>
      <div className="wrapper-heart-icon1">
        <img className="heart-icon1" alt="" src={heartIcon} />
      </div>
      <div className="item-details1">
        <div className="listing-info1">
          <div className="listing-cont1">
            <b className="listing-title1" style={listingTitle1Style}>
              {listingTitle}
            </b>
            <div className="listing-subtitle1" style={listingSubtitleStyle}>
              {listingSubtitle}
            </div>
          </div>
          <div className="rating-cont1">
            <b className="rating1">{rating}</b>
            <img className="star-icon1" alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className="bottom-container1">
          <div className="price-per-night1">
            <b className="price1">{price}</b>
            <div className="night1">/night</div>
          </div>
          <div className="best-time1">
            <img className="trend-icon1" alt="" src={trendIcon} />
            <div className="price-chart1">Price chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  heartIcon: PropTypes.string,
  listingTitle: PropTypes.string,
  listingSubtitle: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  trendIcon: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default ListingItem;
