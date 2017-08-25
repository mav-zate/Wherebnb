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
      <div id="index">
        <ul id="index-allItems">
          {this.props.bnbs.map(bnb => (
            <BnbIndexItem
              key={bnb.id}
              bnb={bnb}
            />)
          )}
        </ul>
      </div>
    );
  }
}


export default BnbIndex;
