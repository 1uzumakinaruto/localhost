import DetailsCard from "./details-card";
import PropTypes from "prop-types";
import "./listing-description.css";

const ListingDescription = ({ className = "" }) => {
  return (
    <div className={`listing-description ${className}`}>
      <h3 className="about-this-home">About this home</h3>
      <div className="frame-parent8">
        <div className="welcome-to-brightwoods-cabin-parent">
          <div className="welcome-to-brightwoods-container">
            <p className="welcome-to-brightwoods">
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </p>
            <p className="living-space-this-charming-ca">
              <b className="living-space">{`Living Space: `}</b>
              <span>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </span>
            </p>
            <p className="bedrooms-with-3-beautifully-a">
              <b className="bedrooms">Bedrooms:</b>
              <span>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </span>
            </p>
            <p className="kitchen-dining-our-fully-eq">
              <b className="kitchen-dining">{`Kitchen & Dining:`}</b>
              <span>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </span>
            </p>
            <p className="bathrooms-2-modern-bathrooms">
              <b className="bathrooms">Bathrooms:</b>
              <span>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </span>
            </p>
            <p className="outdoor-space-step-outside-to">
              <b className="outdoor-space">Outdoor Space:</b>
              <span>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </span>
            </p>
            <p className="location-located-just-minutes">
              <b className="location">Location:</b>
              <span>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </span>
            </p>
            <p className="hosted-with-love-we-take-prid">
              <b className="hosted-with-love">Hosted with Love:</b>
              <span>
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </span>
            </p>
            <p className="come-be-our">
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </p>
          </div>
          <a className="button4">Show more</a>
        </div>
        <div className="detailscard-parent">
          <DetailsCard
            frame65="/frame-65.svg"
            dedicatedWorkspace="Dedicated workspace"
            aPrivateRoomEquippedWithW="A private room equipped with WiFi"
          />
          <DetailsCard
            frame65="/frame-65-1.svg"
            dedicatedWorkspace="Self check-in"
            aPrivateRoomEquippedWithW="Check in with just your phone"
            propDisplay="inline-block"
            propMinWidth="111px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <DetailsCard
            frame65="/frame-65-2.svg"
            dedicatedWorkspace="Free cancellation"
            aPrivateRoomEquippedWithW="Cancel anytime"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="115px"
          />
        </div>
      </div>
    </div>
  );
};

ListingDescription.propTypes = {
  className: PropTypes.string,
};

export default ListingDescription;
