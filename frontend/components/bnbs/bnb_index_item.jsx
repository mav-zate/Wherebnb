import React from 'react';


const BLUE_STAR = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/blue_star.png";
const GREY_STAR = "https://s3.amazonaws.com/wherebnb-devo/bnbs/static_images/grey_star.png";

class BnbIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderStars = this.renderStars.bind(this);
  }


  renderStars(rating) {
    debugger
    switch (rating) {
      case 1:
        return (
          <span>
            <img src={BLUE_STAR}></img>
            <img src={GREY_STAR}></img>
            <img src={GREY_STAR}></img>
            <img src={GREY_STAR}></img>
            <img src={GREY_STAR}></img>
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
        </span>
      );
      default:

    }
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
          <span>{this.props.bnb.price}</span>
          <span>·</span>
          <span>{this.props.bnb.title}</span>
        </div>
        <div className="indexItem-midRow">
          <span>{this.props.bnb.home_type}</span>
          <span>·</span>
          <span>{this.props.bnb.room_type}</span>
        </div>
        <div className="indexItem-bottomRow">
          <span>{this.renderStars(this.props.bnb.rating)}</span>
        </div>
      </li>
  );
  }
}

export default BnbIndexItem;
