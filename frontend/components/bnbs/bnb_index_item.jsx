import React from 'react';


const BLUE_STAR = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/blue_star.png";
const GREY_STAR = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/grey_star.png";


class BnbIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderStars = this.renderStars.bind(this);
    this.renderBeds = this.renderBeds.bind(this);
    this.calculateRating = this.calculateRating.bind(this);
  }


  renderBeds(bedCount) {
    return bedCount > 1 ? `${bedCount} beds` : `1 bed`;
  }


  renderStars(reviews) {
    if (reviews.length === 0) {
      return <span id="Index-unreviewedBnb">NEW</span>;
    } else {
      var rating = this.calculateRating(reviews);
    }

    switch (rating) {
      case 1:
        return (
          <span>
            <img src={BLUE_STAR}></img>
            <img src={GREY_STAR}></img>
            <img src={GREY_STAR}></img>
            <img src={GREY_STAR}></img>
            <img src={GREY_STAR}></img>
            <span id="review-count">{reviews.length}</span>
          </span>
        );
      case 2:
      return (
        <span>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={GREY_STAR}></img>
          <img src={GREY_STAR}></img>
          <img src={GREY_STAR}></img>
          <span id="review-count">{reviews.length}</span>
        </span>
      );
      case 3:
      return (
        <span>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={GREY_STAR}></img>
          <img src={GREY_STAR}></img>
          <span id="review-count">{reviews.length}</span>
        </span>
      );
      case 4:
      return (
        <span>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={GREY_STAR}></img>
          <span id="review-count">{reviews.length}</span>
        </span>
      );
      case 5:
      return (
        <span>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <img src={BLUE_STAR}></img>
          <span id="review-count">{reviews.length}</span>
        </span>
      );
      default:

    }
  }

  calculateRating(reviews) {
    let sum = 0;

    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }

    return Math.floor(sum / reviews.length);
  }

  render() {
    return (
      <li className="indexItem">
        <div>
          <span>
            <img className="indexItem-image" src={this.props.bnb.image_url} />
          </span>
        </div>
        <div className="indexItem-topRow">
          <span>From</span>
          <span>{`$${Math.floor(this.props.bnb.price)}`}</span>
          <span>·</span>
          <span>{this.props.bnb.title}</span>
        </div>
        <div className="indexItem-midRow">
          <span>{this.props.bnb.room_type}</span>
          <span>·</span>
          <span>{this.renderBeds(this.props.bnb.bed_count)}</span>
        </div>
        <div className="indexItem-bottomRow">
          {this.renderStars(this.props.bnb.reviews)}
        </div>

      </li>
  );
  }
}

export default BnbIndexItem;
