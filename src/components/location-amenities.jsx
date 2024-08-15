import PropTypes from "prop-types";
import "./location-amenities.css";

const LocationAmenities = ({ className = "" }) => {
  return (
    <div className={`location-amenities ${className}`}>
      <div className="amenities-parent">
        <h3 className="amenities">Amenities</h3>
        <div className="frame-parent9">
          <div className="amenitiessection1-parent">
            <div className="amenitiessection1">
              <div className="mdilake-parent">
                <img
                  className="mdilake-icon"
                  loading="lazy"
                  alt=""
                  src="/mdilake.svg"
                />
                <div className="lakeside">Lakeside</div>
              </div>
              <div className="tablertools-kitchen-2-parent">
                <img
                  className="tablertools-kitchen-2-icon"
                  loading="lazy"
                  alt=""
                  src="/tablertoolskitchen2.svg"
                />
                <div className="kitchen">Kitchen</div>
              </div>
              <div className="material-symbolsnest-cam-iq-o-parent">
                <img
                  className="material-symbolsnest-cam-iq-o-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsnestcamiqoutdooroutline.svg"
                />
                <div className="security-cameras-on">
                  Security cameras on property
                </div>
              </div>
              <div className="ionwifi-parent">
                <img
                  className="ionwifi-icon"
                  loading="lazy"
                  alt=""
                  src="/ionwifi.svg"
                />
                <div className="wifi">Wifi</div>
              </div>
            </div>
            <div className="amenitiessection2">
              <div className="phcar-parent">
                <img
                  className="phcar-icon"
                  loading="lazy"
                  alt=""
                  src="/phcar.svg"
                />
                <div className="free-parking">Free parking</div>
              </div>
              <div className="cilshower-parent">
                <img
                  className="cilshower-icon"
                  loading="lazy"
                  alt=""
                  src="/cilshower.svg"
                />
                <div className="outdoor-shower">Outdoor shower</div>
              </div>
              <div className="material-symbolswater-voc-out-parent">
                <img
                  className="material-symbolswater-voc-out-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolswatervocoutlinerounded.svg"
                />
                <a className="hot-water">Hot water</a>
              </div>
              <div className="covidpersonal-hygiene-hand-li-parent">
                <img
                  className="covidpersonal-hygiene-hand-li-icon"
                  loading="lazy"
                  alt=""
                  src="/covidpersonalhygienehandliquidsoap.svg"
                />
                <div className="shampoo">Shampoo</div>
              </div>
            </div>
            <div className="amenitiessection3">
              <div className="phfire-extinguisher-parent">
                <img
                  className="phfire-extinguisher-icon"
                  loading="lazy"
                  alt=""
                  src="/phfireextinguisher.svg"
                />
                <div className="fire-extinguisher">Fire Extinguisher</div>
              </div>
              <div className="streamlinefood-kitchenware-re-parent">
                <img
                  className="streamlinefood-kitchenware-re-icon"
                  alt=""
                  src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                />
                <div className="freezer">Freezer</div>
              </div>
              <div className="material-symbolscoffee-maker-parent">
                <img
                  className="material-symbolscoffee-maker-icon"
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscoffeemakeroutline.svg"
                />
                <div className="coffee-maker">Coffee Maker</div>
              </div>
              <div className="mdistove-parent">
                <img
                  className="mdistove-icon"
                  loading="lazy"
                  alt=""
                  src="/mdistove.svg"
                />
                <div className="glass-stove">Glass stove</div>
              </div>
            </div>
          </div>
          <button className="search-flights-button3">
            <div className="button5">Show all amenities</div>
          </button>
        </div>
      </div>
      <div className="location-amenities-inner">
        <div className="frame-parent10">
          <div className="frame-parent11">
            <div className="where-youll-be-parent">
              <h3 className="where-youll-be">Where you’ll be</h3>
              <div className="vector-parent">
                <img className="vector-icon2" alt="" src="/vector-3.svg" />
                <div className="the-bridle-path">The Bridle Path</div>
              </div>
            </div>
            <div className="weather-info-parent">
              <div className="weather-info">
                <img
                  className="suncloud-icon"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className="weather-info1">
                  <b className="temperature">20°C</b>
                  <div className="weather-detail">Broken clouds</div>
                </div>
              </div>
              <div className="frame-parent12">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/sun.svg" />
                  <div className="c-wrapper">
                    <b className="c">23°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="sun">Sun</div>
                  <div className="aug">27 Aug</div>
                </div>
              </div>
              <div className="frame-parent13">
                <div className="suncloud-parent">
                  <img
                    className="suncloud-icon1"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-container">
                    <b className="c1">22°C</b>
                  </div>
                </div>
                <div className="mon-parent">
                  <div className="mon">Mon</div>
                  <div className="aug1">28 Aug</div>
                </div>
              </div>
              <div className="frame-parent14">
                <div className="sun-container">
                  <img className="sun-icon1" alt="" src="/sun.svg" />
                  <div className="c-frame">
                    <b className="c2">23°C</b>
                  </div>
                </div>
                <div className="tue-parent">
                  <div className="tue">Tue</div>
                  <div className="aug2">29 Aug</div>
                </div>
              </div>
              <div className="frame-parent15">
                <div className="suncloud-group">
                  <img
                    className="suncloud-icon2"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-wrapper1">
                    <b className="c3">20°C</b>
                  </div>
                </div>
                <div className="wed-parent">
                  <div className="wed">Wed</div>
                  <div className="aug3">30 Aug</div>
                </div>
              </div>
              <div className="frame-parent16">
                <div className="suncloud-container">
                  <img
                    className="suncloud-icon3"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-wrapper2">
                    <b className="c4">19°C</b>
                  </div>
                </div>
                <div className="thu-parent">
                  <div className="thu">Thu</div>
                  <div className="aug4">31 Aug</div>
                </div>
              </div>
              <div className="frame-parent17">
                <div className="sun-parent1">
                  <img className="sun-icon2" alt="" src="/sun.svg" />
                  <div className="c-wrapper3">
                    <b className="c5">24°C</b>
                  </div>
                </div>
                <div className="fri-parent">
                  <div className="fri">Fri</div>
                  <div className="sep">1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img className="frame-inner" alt="" src="/rectangle-1@2x.png" />
          <img
            className="symbol-stacker-icon"
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

LocationAmenities.propTypes = {
  className: PropTypes.string,
};

export default LocationAmenities;
