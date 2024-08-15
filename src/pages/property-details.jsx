import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import ListingDescription from "../components/listing-description";
import LocationAmenities from "../components/location-amenities";
import ReviewSection from "../components/review-section";
import SimilarStaysSection from "../components/similar-stays-section";
import Footer from "../components/footer";
import "./property-details.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className="frame-parent">
        <FrameComponent />
        <section className="listing-details-section">
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer
        propTextDecoration="none"
        propTextDecoration1="none"
        propTextDecoration2="none"
      />
      <div className="band2">
        <div className="band-inner">
          <div className="localhost-inc-all-rights-res-parent">
            <div className="localhost-inc-all2">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="privacy-policy-parent">
              <div className="privacy-policy2">Privacy Policy</div>
              <div className="terms-conditions2">{`Terms & Conditions`}</div>
              <div className="contact-us2">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
