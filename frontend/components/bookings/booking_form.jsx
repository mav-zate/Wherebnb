import React from 'react';


class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit() {

  }

  update() {

  }

  render() {
    this.bnbId = parseInt(/\/bnbs\/(\d+)/.exec(this.props.match.url)[1]);
    this.bnb = this.props.bnbs[this.bnbId];
    return (
      <div id="booking-container">
        <div id="booking-form-title">
          <span>
            ${Math.floor(this.bnb.price)}
          </span>
          <p>
            per night
          </p>
        </div>
        <form id="booking-form">
          <div className="booking-row">
            <div className="booking-row-item">
              <span>
                Check In
              </span>
              <input
                type="date"
                />
            </div>
            <div className="booking-row-item">
              <span>
                Check Out
              </span>
              <input
                type="date">
              </input>
            </div>
          </div>
          <div className="booking-row">
            <input
              id="booking-form-submit-button"
              type="submit"
              value="Book"/>
          </div>
          <div className="booking-row">
            <span>You won't be charged for this yet </span>
          </div>
        </form>
      </div>
    );
  }
}


export default BookingForm;
