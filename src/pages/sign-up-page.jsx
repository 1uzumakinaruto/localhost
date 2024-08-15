import { useCallback } from "react";
import Header from "../components/header";
import SocialMediaLogin from "../components/social-media-login";
import { useNavigate } from "react-router-dom";
import "./sign-up-page.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections">
        <div className="form-wrapper">
          <div className="form">
            <div className="create-account-parent">
              <h2 className="create-account">Create Account</h2>
              <div className="password-input">
                <form className="form1">
                  <div className="form-fields">
                    <div className="email">
                      <input
                        className="email-address"
                        placeholder="Email address"
                        type="text"
                      />
                      <img
                        className="iconaccount"
                        alt=""
                        src="/iconaccount.svg"
                      />
                    </div>
                    <div className="password">
                      <input
                        className="password1"
                        placeholder="Password"
                        type="text"
                      />
                      <img
                        className="iconpassword"
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                    <div className="confirm-password">
                      <input
                        className="confirm-password1"
                        placeholder="Confirm password"
                        type="text"
                      />
                      <img
                        className="iconpassword1"
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className="search-flights-button">
                    <b className="button">Sign up</b>
                  </button>
                </form>
              </div>
              <div className="or-label">
                <div className="social-media-containers" />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image@2x.png"
                image1="/image-1@2x.png"
                image2="/image-2@2x.png"
              />
            </div>
            <div
              className="i-already-have-container"
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className="login">Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="band">
        <div className="i-have-an-account">
          <div className="band-footer">
            <div className="localhost-inc-all">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="copyright-notice">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="contact-us">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
