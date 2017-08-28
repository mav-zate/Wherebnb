import React from 'react';
import { fetchBnbAddress } from '../../util/bnb_api_util';

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
  }

  componentDidMount() {
    this.bnbId = parseInt(/\/bnbs\/(\d+)/.exec(this.props.match.url)[1]);
    this.props.requestSingleBnb(this.bnbId).then(bnb => {
      this.fetchAddress(this.props.bnbs[this.bnbId].lat, this.props.bnbs[this.bnbId].lng);
    });

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



  render() {
    let bnb;
    let host;
    if (this.props.bnbs[this.bnbId] !== undefined) {
      bnb = this.props.bnbs[this.bnbId];
      host = bnb.host;
    } else {
      bnb = {};
      host = {};
    }

    return (
      <div id="show-page">
        <div id="show-page-image-container">
          <img id="show-page-image"src={bnb.image_url}></img>
        </div>
        <div id="show-page-overview">
          <div id="overview-summary">
            <div>
              <span>{bnb.title}</span>
              <span>{host.first_name}</span>
              <br/>
              <div>
                <span>{this.state.address.neighborhood}</span>
                <span>{this.state.address.city}</span>
                <span>{this.state.address.country}</span>
                <p>pls show</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default BnbShow;
