import { useMemo } from "react";
import PropTypes from "prop-types";
import "./details-card.css";

const DetailsCard = ({
  className = "",
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const aPrivateRoomStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={`detailscard ${className}`}>
      <img className="detailscard-child" loading="lazy" alt="" src={frame65} />
      <div className="dedicated-workspace-parent">
        <b className="dedicated-workspace" style={dedicatedWorkspaceStyle}>
          {dedicatedWorkspace}
        </b>
        <div className="a-private-room" style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  className: PropTypes.string,
  frame65: PropTypes.string,
  dedicatedWorkspace: PropTypes.string,
  aPrivateRoomEquippedWithW: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default DetailsCard;
