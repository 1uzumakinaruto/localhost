import { useMemo } from "react";
import PropTypes from "prop-types";
import "./social-media-login.css";

const SocialMediaLogin = ({
  className = "",
  orSignUpWith,
  image,
  image1,
  image2,
  propTextDecoration,
}) => {
  const inputStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`social-media-login ${className}`}>
      <div className="or-sign-up">{orSignUpWith}</div>
      <div className="social-login-container">
        <div className="social-login">
          <img className="image-icon" loading="lazy" alt="" src={image} />
          <a className="input" style={inputStyle}>
            Google
          </a>
        </div>
        <div className="social-login1">
          <img className="image-icon1" alt="" src={image1} />
          <a className="text">Facebook</a>
        </div>
        <div className="social-login2">
          <img className="image-icon2" alt="" src={image2} />
          <div className="text1">Apple</div>
        </div>
      </div>
    </div>
  );
};

SocialMediaLogin.propTypes = {
  className: PropTypes.string,
  orSignUpWith: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default SocialMediaLogin;
