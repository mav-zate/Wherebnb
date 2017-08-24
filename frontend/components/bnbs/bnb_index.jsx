import React from 'react';
import BnbIndexItem from './bnb_index_item';

class BnbIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bnbs: [],
    };
    this.keyMaker = this.keyMaker.bind(this);
  }

  componentWillMount() {
    this.props.requestAllBnbs();
  }

  keyMaker(id) {
    return `bnbIndex-item-${id}`;
  }

  render() {
    return (
      <ul>
        {this.props.bnbs.map(bnb => (
          <BnbIndexItem
            key={bnb.id}
            bnb={bnb}
            id={this.keyMaker(bnb.id)}/>)
        )}
      </ul>
    );
  }
}


export default BnbIndex;
