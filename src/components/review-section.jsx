import ReviewCard from "./review-card";
import PropTypes from "prop-types";
import "./review-section.css";

const ReviewSection = ({ className = "" }) => {
  return (
    <section className={`review-section ${className}`}>
      <div className="image-processor">
        <b className="reviews1">Reviews</b>
        <a className="button6">View all</a>
      </div>
      <div className="value-validator">
        <ReviewCard
          ellipse12="/ellipse-12@2x.png"
          johnnyCash="Johnny Cash"
          june2023="June 2023"
          anchoringAnchor="5.0"
          michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <ReviewCard
          ellipse12="/ellipse-12-1@2x.png"
          johnnyCash="Yuta Watanabe"
          june2023="May 2023"
          anchoringAnchor="4.5"
          michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          propMinWidth="114px"
          propMinWidth1="64px"
        />
        <ReviewCard
          ellipse12="/ellipse-12-2@2x.png"
          johnnyCash="Shane Willis"
          june2023="December 2022"
          anchoringAnchor="4.8"
          michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          propMinWidth="95px"
          propMinWidth1="104px"
        />
      </div>
    </section>
  );
};

ReviewSection.propTypes = {
  className: PropTypes.string,
};

export default ReviewSection;
