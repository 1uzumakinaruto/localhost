import StayCard from "./stay-card";
import PropTypes from "prop-types";
import "./similar-stays-section.css";

const SimilarStaysSection = ({ className = "" }) => {
  return (
    <section className={`similar-stays-section ${className}`}>
      <div className="alignment-assistant">
        <b className="similar-stays">Similar stays</b>
        <a className="button7">View all</a>
      </div>
      <div className="shape-shifter">
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className="staycard1">
          <div className="frame-parent18">
            <div className="vector-container">
              <img className="vector-icon5" alt="" src="/superhost-icon.svg" />
              <div className="superhost4">Superhost</div>
            </div>
            <div className="wrapper-heart-icon3">
              <img className="heart-icon4" alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className="frame-parent19">
            <div className="frame-parent20">
              <div className="urban-loft-parent">
                <b className="urban-loft">Urban Loft</b>
                <b className="urban-loft1">Urban Loft</b>
              </div>
              <div className="parent1">
                <b className="b3">4.8</b>
                <img className="vector-icon6" alt="" src="/star-icon.svg" />
              </div>
            </div>
            <div className="frame-parent21">
              <div className="parent2">
                <b className="b4">$502</b>
                <div className="night4">/night</div>
              </div>
              <img className="frame-child1" alt="" src="/vector-11.svg" />
              <div className="user-group">
                <img className="user-icon1" alt="" src="/user.svg" />
                <div className="guests1">2 guests</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
        />
      </div>
    </section>
  );
};

SimilarStaysSection.propTypes = {
  className: PropTypes.string,
};

export default SimilarStaysSection;
