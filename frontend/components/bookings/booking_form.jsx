import React from 'react';


class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking({
      booking: {
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        booker_id: this.props.currentUser.id,
        bnb_id: this.bnbId
      }
    });
  }

  renderErrors() {
    debugger
    if (this.state.errors.length > 0) {
      console.log('error');
      return (
        <div className="booking-row">
          {
            this.state.errors.map((err) => (
              <span className="booking-form-error">
                err
              </span>
            ))
          }
        </div>
      );
    } else {
      return null;
    }
  }

  update(date) {
    return (e) => {
      this.setState({[date]: e.target.value});
    };
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
        <form
          id="booking-form"
          onSubmit={this.handleSubmit}>
          <div className="booking-row">
            <div className="booking-row-item">
              <span>
                Check In
              </span>
              <input
                type="date"
                onChange={this.update('startDate')}
                />
            </div>
            <div className="booking-row-item">
              <span>
                Check Out
              </span>
              <input
                type="date"
                onChange={this.update('endDate')}>
              </input>
            </div>
          </div>
          <div className="booking-row">
            <input
              id="booking-form-submit-button"
              type="submit"
              value="Book"/>
          </div>
          <div className="booking-row-">
            {this.state.errors.map(err =>
              (<span className="booking-form-error">{err}</span>)
            )}
          </div>
          <div className="booking-row">
            <span id="booking-footer">
              You won't be charged for this yet
             </span>
          </div>
        </form>
      </div>
    );
  }
}


export default BookingForm;
