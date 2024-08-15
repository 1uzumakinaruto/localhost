import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="frame-div">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="decision-maker-parent">
          <img
            className="decision-maker-icon"
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className="decision-maker-icon1"
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className="decision-maker-icon2"
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className="decision-maker-icon3"
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className="decision-maker">
            <img
              className="variable-storage-icon"
              alt=""
              src="/variable-storage@2x.png"
            />
            <img
              className="error-handler-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="brightwoods-cabin-parent">
                <h2 className="brightwoods-cabin">Brightwoods Cabin</h2>
                <div className="bridlepath-ontario-canada">
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className="heart-icon2"
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className="frame-parent5">
              <div className="parent">
                <b className="b">5.0</b>
                <img className="vector-icon" alt="" src="/vector-1.svg" />
              </div>
              <div className="reviews-wrapper">
                <u className="reviews">200 Reviews</u>
              </div>
            </div>
          </div>
          <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="group">
              <b className="b1">$658</b>
              <div className="night-wrapper">
                <div className="night2">/night</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="icontrend-parent">
                <div className="icontrend">
                  <div className="icon-parent">
                    <img className="icon1" alt="" src="/icon.svg" />
                    <div className="frame-item" />
                  </div>
                </div>
                <div className="best-time-to-book-wrapper">
                  <div className="best-time-to">Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <button className="search-flights-button2">
            <div className="button3">Book this home</div>
          </button>
        </div>
        <div className="hosted-by-parent">
          <div className="hosted-by">Hosted by:</div>
          <div className="data-aggregator-parent">
            <img
              className="data-aggregator-icon"
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="michelle-ward-parent">
              <b className="michelle-ward">Michelle Ward</b>
              <div className="joined-in-may">Joined in May 2021</div>
            </div>
            <button className="logic-gate">
              <img className="vector-icon1" alt="" src="/vector-2.svg" />
              <div className="superhost2">Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
