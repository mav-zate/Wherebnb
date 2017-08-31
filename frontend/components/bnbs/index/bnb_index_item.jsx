import React from 'react';
import { renderStars, calculateRating } from '../star_render_methods';
import { Link } from 'react-router-dom';

class BnbIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderStars = renderStars.bind(this);
    this.renderBeds = this.renderBeds.bind(this);
    this.renderRoomType = this.renderRoomType.bind(this);
  }


  renderBeds(bedCount) {
    return bedCount > 1 ? `${bedCount} beds` : `1 bed`;
  }

  renderRoomType() {
    let roomType = this.props.bnb.room_type;
    if (roomType === 'entire_home') {
      return 'Entire home';
    } else if (roomType === 'private_room') {
      return 'Private room';
    } else if (roomType === 'shared_room') {
      return 'Shared room';
    }
  }

  render() {
    return (
      <li className="indexItem">
        <Link to={`/bnbs/${this.props.bnb.id}`}>
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
            <span>{this.renderRoomType()}</span>
            <span>·</span>
            <span>{this.renderBeds(this.props.bnb.bed_count)}</span>
          </div>
          <div className="indexItem-bottomRow">
            {this.renderStars(this.props.bnb.reviews)}
          </div>
        </Link>
      </li>
  );
  }
}

export default BnbIndexItem;
