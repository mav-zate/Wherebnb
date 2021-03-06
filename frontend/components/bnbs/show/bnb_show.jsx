import React from 'react';
import { fetchBnbAddress } from '../../../util/bnb_api_util';
import { renderStars, calculateRating } from '../star_render_methods';
import BnbShowOverview from './bnb_show_overview';
import BnbShowReviews from './bnb_show_reviews';
import BnbShowHost from './bnb_show_host';
import BnbShowNeighborhood from './bnb_show_neighborhood';
import BookingFormContainer from '../../bookings/booking_form_container';


const GOOGLE_KEY = "AIzaSyBG7ngjQtl2whDLcHAzer_CA9OMk9UF8wg";


class BnbShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {
        neighborhood: '',
        city: '',
        country: '',
      },

    };
    this.fetchAddress = this.fetchAddress.bind(this);
    this.renderStars = renderStars;
    this.calculateRating = calculateRating;
  }

  componentDidMount() {
    let bnbId = this.props.match.params.bnbId;
    this.props.requestSingleBnb(bnbId).then(bnb => {
      this.fetchAddress(this.props.bnbs[bnbId].lat, this.props.bnbs[bnbId].lng);
    });
    this.props.requestBnbReviews(bnbId)
  }


  fetchAddress(lat, lng) {
    let neighborhood;
    let city;
    let country;
    fetchBnbAddress(lat, lng, GOOGLE_KEY).then(data => {
      data.results[0].address_components.forEach(object => {
        if (object.types.includes('locality') ||
            object.types.includes('sublocality')) {
          neighborhood = object.long_name;
        }
        if (object.types.includes('administrative_area_level_1')) {
          city = object.long_name;
        }
        if (object.types.includes('country')) {
          country = object.long_name;
        }

      });

      this.setState({
        address: {
          neighborhood,
          city,
          country,
        },
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bnbId !== nextProps.match.params.bnbId) {
      this.props.requestSingleBnb(parseInt(nextProps.match.params.bnbId));
    }
  }

  render() {
    let bnbId = this.props.match.params.bnbId;
    if (this.props.bnbs[bnbId] !== undefined) {
      let bnb = this.props.bnbs[bnbId];
      let host = bnb.host;
      return (
        <div id="show-page">
          <div id="show-page-image-container">
            <img id="show-page-image"src={bnb.image_url}></img>
          </div>

          <div id="show-page-under-image">
            <div id="show-page-info">
              <BnbShowOverview
                bnb={bnb}
                host={host}
                address={this.state.address}
                renderStars={renderStars}
                />

              <BnbShowReviews
                reviews={this.props.reviews}
                createReview={this.props.createReview}
                bnb={bnb}
                session={this.props.session}
                />


              <BnbShowHost
                host={host}
                />

              <BnbShowNeighborhood
                center={{lat: bnb.lat, lng: bnb.lng}}
                />
            </div>
            <div id="show-page-booking">
              <BookingFormContainer />
            </div>

          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}


export default BnbShow;
