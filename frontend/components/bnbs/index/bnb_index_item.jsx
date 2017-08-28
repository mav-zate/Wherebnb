import React from 'react';
import { renderStars, calculateRating } from '../star_render_methods';

class BnbIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderStars = renderStars.bind(this);
    this.renderBeds = this.renderBeds.bind(this);
  }


  renderBeds(bedCount) {
    return bedCount > 1 ? `${bedCount} beds` : `1 bed`;
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
