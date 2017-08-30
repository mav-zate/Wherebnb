import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { withRouter } from 'react-router';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = ({ currentUser, bnbs }) => {
  return {
    currentUser,
    bnbs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
