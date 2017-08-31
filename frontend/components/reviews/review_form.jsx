import React from 'react';
import { withRouter } from 'react-router-dom';


/* FIRST THINGS YOU SHOULD DO!
1. MAKE FUNCTION THAT RETURNS MEAN OF CATEGORIES
2. MAKE SURE THAT REVIEW FORM ACTUALLY POSTS TO DATABASE*/

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bnbId: 0,
      authorId: 0,
      body: '',
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      checkIn: 0,
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  componentDidMount() {
    let currentUser = this.props.session.currentUser;
    this.setState({
      bnbId: parseInt(/\/bnbs\/(\d+)/.exec(this.props.match.url)[1]),
      authorId: currentUser ? currentUser.id : 0,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      review: {
        bnb_id: this.state.bnbId,
        author_id: this.state.authorId,
        accuracy: this.state.accuracy,
        communication: this.state.communication,
        cleanliness: this.state.cleanliness,
        location: this.state.location,
        check_in: this.state.checkIn,
        value: this.state.value,
        body: this.state.body,
        rating: this.setRating(),
      }
    };
    this.props.createReview(review);
  }

  componentWillReceiveProps(nextProps) {

  }

  setRating() {
    let sum = this.state.accuracy;
    sum += this.state.communication;
    sum += this.state.cleanliness;
    sum += this.state.location;
    sum += this.state.checkIn;
    sum += this.state.value;

    return Math.floor(sum / 6);
  }

  update(key) {
    return (e) => {
      if (key === 'body') {
        this.setState({ [key]: e.target.value });
      } else {
        this.setState({ [key]: parseInt(e.target.value)});
      }
    };
  }

  render() {
    return (
      <div> Leave a review!
        <form id="review-form" onSubmit={this.handleSubmit}>
          <div>Accuracy
            <input
              type="number"
              placeholder="Enter a number between 1 and 5"
              onChange={this.update('accuracy')}/>
          </div>
          <div>Communication
            <input
              type="number"
              placeholder="Enter a number between 1 and 5"
              onChange={this.update('communication')}/>
          </div>
          <div>Cleanliness
            <input
              type="number"
              placeholder="Enter a number between 1 and 5"
              onChange={this.update('cleanliness')}/>
          </div>
          <div>Location
            <input
              type="number"
              placeholder="Enter a number between 1 and 5"
              onChange={this.update('location')}/>
          </div>
          <div>Check in
            <input
              type="number"
              placeholder="Enter a number between 1 and 5"
              onChange={this.update('checkIn')}/>
          </div>
          <div>Value
            <input
              type="number"
              placeholder="Enter a number between 1 and 5"
              onChange={this.update('value')}/>
          </div>
          <div>
            <textarea
              placeholder="Describe your experience!"
              onChange={this.update('body')}/>
          </div>
          <div>
            <input
              type="submit"
              value="Submit review"/>
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(ReviewForm);
