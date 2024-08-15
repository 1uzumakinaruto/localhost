import { useMemo } from "react";
import PropTypes from "prop-types";
import "./review-card.css";

const ReviewCard = ({
  className = "",
  ellipse12,
  johnnyCash,
  june2023,
  anchoringAnchor,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`reviewcard ${className}`}>
      <div className="color-combiner-parent">
        <div className="color-combiner">
          <img
            className="color-combiner-child"
            loading="lazy"
            alt=""
            src={ellipse12}
          />
          <div className="rotation-rotator">
            <b className="johnny-cash" style={johnnyCashStyle}>
              {johnnyCash}
            </b>
            <div className="june-2023" style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className="layer-launder">
          <b className="anchoring-anchor">{anchoringAnchor}</b>
          <img
            className="contrast-controller-icon"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  ellipse12: PropTypes.string,
  johnnyCash: PropTypes.string,
  june2023: PropTypes.string,
  anchoringAnchor: PropTypes.string,
  michellesPlaceWasSoGreatA: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default ReviewCard;
