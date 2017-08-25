import React from 'react';
import BnbIndexItem from './bnb_index_item';

class BnbIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bnbs: [],
    };
  }

  componentWillMount() {
    this.props.requestAllBnbs();
  }


  render() {
    return (
      <ul id="index">
        {this.props.bnbs.map(bnb => (
          <BnbIndexItem
            key={bnb.id}
            bnb={bnb}
          />)
        )}
      </ul>
    );
  }
}


export default BnbIndex;
