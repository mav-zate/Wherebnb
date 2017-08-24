import React from 'react';


class BnbIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li id={this.props.id}>
        <div>
          <span>Image Placeholder</span>
        </div>
        <div>
          <span>From</span>
          <span>{this.props.bnb.price}</span>
          <span>·</span>
          <span>{this.props.bnb.title}</span>
        </div>
        <div>
          <span>{this.props.bnb.home_type}</span>
          <span>·</span>
          <span>{this.props.bnb.room_type}</span>
        </div>
        <div>
          <span>{this.props.bnb.rating}</span>
        </div>
      </li>
  );
  }
}

export default BnbIndexItem;
