import { useCallback } from "react";
import Header from "../components/header";
import SocialMediaLogin from "../components/social-media-login";
import { useNavigate } from "react-router-dom";
import "./sign-in-page.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="sign-in-page">
      <main className="header-parent">
        <Header
          notifications="/notifications@2x.png"
          avatar="/avatar@2x.png"
          showLoginSection={false}
        />
        <section className="login-sections1">
          <div className="form-container">
            <div className="form2">
              <div className="sign-in-parent">
                <h2 className="sign-in">Sign in</h2>
                <div className="form3">
                  <form className="form4">
                    <div className="form-fields1">
                      <div className="email1">
                        <input
                          className="email-address1"
                          placeholder="Email address"
                          type="text"
                        />
                        <img
                          className="iconaccount1"
                          alt=""
                          src="/iconaccount.svg"
                        />
                      </div>
                      <div className="password2">
                        <input
                          className="password3"
                          placeholder="Password"
                          type="text"
                        />
                        <img
                          className="iconpassword2"
                          alt=""
                          src="/iconpassword.svg"
                        />
                      </div>
                    </div>
                    <button className="search-flights-button1">
                      <b className="button1">Sign in</b>
                    </button>
                  </form>
                </div>
              </div>
              <div className="form-child" />
              <SocialMediaLogin
                orSignUpWith="Or sign in with"
                image="/image1@2x.png"
                image1="/image-15@2x.png"
                image2="/image-22@2x.png"
                propTextDecoration="unset"
              />
              <div
                className="dont-have-an-container"
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className="sign-up">Sign up</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="band3">
        <div className="privacy-policy-terms-contactus-wrapper">
          <div className="privacy-policy-terms-contactus">
            <div className="localhost-inc-all3">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="terms-conditions3">
              <div className="privacy-policy3">Privacy Policy</div>
              <div className="terms-conditions4">{`Terms & Conditions`}</div>
              <div className="contact-us3">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
