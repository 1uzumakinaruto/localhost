import { useMemo } from "react";
import PropTypes from "prop-types";
import "./star-icons.css";

const StarIcons = ({ className = "", label, propMinWidth }) => {
  const labelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`star-icons ${className}`}>
      <div className="label" style={labelStyle}>
        {label}
      </div>
      <div className="icon">
        <img
          className="calendartodayfilled-icon"
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

StarIcons.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default StarIcons;
