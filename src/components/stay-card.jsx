import { useMemo } from "react";
import PropTypes from "prop-types";
import "./stay-card.css";

const StayCard = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
}) => {
  const symbolSortingStationStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`staycard ${className}`}>
      <div className="symbol-sorting-station" style={symbolSortingStationStyle}>
        <div className="vector-group">
          <img className="vector-icon3" alt="" src="/superhost-icon.svg" />
          <div className="superhost3">Superhost</div>
        </div>
        <div className="wrapper-heart-icon2">
          <img className="heart-icon3" alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className="filter-filter">
        <div className="effect-enabler">
          <div className="layer-linker">
            <b className="brightwoods-estate">{brightwoodsEstate}</b>
            <div className="bridlepath-ontario-canada1">
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="transparency-tuner">
            <b className="rotate-routiner">4.8</b>
            <img className="vector-icon4" alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className="label-labeller">
          <div className="container">
            <b className="b2">$502</b>
            <div className="night3">/night</div>
          </div>
          <img
            className="label-labeller-child"
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className="user-parent">
            <img className="user-icon" loading="lazy" alt="" src="/user.svg" />
            <div className="guests">2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StayCard.propTypes = {
  className: PropTypes.string,
  brightwoodsEstate: PropTypes.string,
  bridlepathOntarioCanada: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default StayCard;
