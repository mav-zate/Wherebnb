import React from 'react';

/* NOTES */
/* cleaning fee: optional  */


const BnbShowOverview = ({bnb, host, address, renderStars}) => {
  return (
    <div id="show-page-overview">
      <div id="overview-summary">
        <div>
          <div className="show-panel">
            <span id="bnb-show-title">
              {bnb.title}
            </span>
            <br/>
            <div>
              <div>
                <span>{address.neighborhood}, </span>
                <span>{address.city}, </span>
                <span>{address.country}</span>
              </div>
              <div>
                {renderStars(bnb.reviews)} reviews
              </div>

            </div>
          </div>

          <div className="show-panel">
            <div>
              {bnb.general_description}
            </div>
          </div>


          <div className="show-panel">
            <div className="show-panel-title">
              The space
            </div>
            <div>
              Accomodates: {bnb.accomodation_count}
            </div>
            <div>
              Beds: {bnb.bed_count}
            </div>
            <div>
              Property type: {bnb.home_type}
            </div>
            <div>
              Room type: {bnb.room_type}
            </div>
          </div>

          <div className="show-panel">
            <div className="show-panel-title">
              Amenities
            </div>
            <div>
              internet: {bnb.wifi ? 'true' : 'false'}
            </div>
            <div>
              wifi: {bnb.wifi ? 'true' : 'false'}
            </div>
            <div>
              Kitchen: {bnb.kitchen ? 'true' : 'false'}
            </div>
            <div>
              Parking: {bnb.parking ? 'true' : 'false'}
            </div>
            <div>
              Essentials: {bnb.essentials ? 'true' : 'false'}
            </div>
            <div>
              Pets allowed: {bnb.pets_allowed ? 'true' : 'false'}
            </div>
            <div>
              Smoking allowed: {bnb.smoking_allowed ? 'true' : 'false'}
            </div>
          </div>

          <div className="show-panel">
            <div className="show-panel-title">
              Prices
            </div>
            <div>
              Weekly Discount: {Math.floor(bnb.weekly_discount * 100)}%
            </div>
            <div>
              Monthly Discount: {Math.floor(bnb.monthly_discount * 100)}%
            </div>
            <div>
              Cleaning Fee: ${Math.floor(bnb.cleaning_fee)}
            </div>
          </div>

          <div className="show-panel">
            <div className="show-panel-title">
              Availability
            </div>
            <div>
              link to calender of availabilities
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BnbShowOverview;
