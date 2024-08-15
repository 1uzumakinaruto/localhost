import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import HeroContainer from "../components/hero-container";
import SearchSectionHeader from "../components/search-section-header";
import ListingItem1 from "../components/listing-item1";
import ListingItem from "../components/listing-item";
import Footer from "../components/footer";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className="homepage">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className="stays-section">
        <SearchSectionHeader />
        <section className="homes">
          <ListingItem1
            listingImage="/listing-image@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            image="/image@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            image="/image-11@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            trendIcon="/trend-icon@2x.png"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-21@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            propDisplay="inline-block"
            propMinWidth="129px"
          />
          <ListingItem1
            listingImage="/image-3@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <ListingItem
            image="/image-4@2x.png"
            heartIcon="/heart-icon-5.svg"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            trendIcon="/trend-icon-5.svg"
            propDisplay="inline-block"
            propMinWidth="118px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-5@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            propDisplay="inline-block"
            propMinWidth="102px"
          />
          <ListingItem
            image="/image-6@2x.png"
            heartIcon="/heart-icon-5.svg"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            trendIcon="/trend-icon-5.svg"
            propDisplay="inline-block"
            propMinWidth="112px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem
            image="/image-7@2x.png"
            heartIcon="/heart-icon-5.svg"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            trendIcon="/trend-icon-5.svg"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-8@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <ListingItem1
            listingImage="/image-9@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            propDisplay="inline-block"
            propMinWidth="79px"
          />
          <ListingItem
            image="/image-10@2x.png"
            heartIcon="/heart-icon-5.svg"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-5.svg"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem
            image="/image-111@2x.png"
            heartIcon="/heart-icon-5.svg"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-5.svg"
            propDisplay="inline-block"
            propMinWidth="121px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-12@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <ListingItem
            image="/image-13@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="127px"
          />
          <ListingItem
            image="/image-14@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="127px"
          />
        </section>
        <button className="show-more-button">
          <a className="show-more-text">Show more</a>
        </button>
      </main>
      <Footer />
      <div className="band1">
        <div className="tab-container">
          <div className="accordion-engine">
            <div className="localhost-inc-all1">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="popover-producer">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
