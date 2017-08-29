import React from 'react';


class RoomTypeFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entireHome: true,
      privateRoom: true,
      sharedRoom: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.evaluateCheckBoxes = this.evaluateCheckBoxes.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.evaluateCheckBoxes();
  }

  evaluateCheckBoxes() {
    let falseValues = {};
    if (!document.getElementById('is-entire-home-checked').checked) {
      falseValues.entireHome = false;
    }
    if (!document.getElementById('is-private-room-checked').checked) {
      falseValues.privateRoom = false;
    }
    if (!document.getElementById('is-shared-home-checked').checked) {
      falseValues.sharedRoom = false;
    }
    this.setState({
      entireHome: (falseValues.entireHome === undefined) ? true : false,
      privateRoom: (falseValues.privateRoom === undefined) ? true : false,
      sharedRoom: (falseValues.sharedRoom === undefined) ? true : false,
    }, () => this.props.updateFilter('roomType', this.state));
  }

  update(type) {
    return (e) => {
      if (e.target.checked) {
        console.log('true');
        this.setState({[type]: true});
      } else {
        console.log('false');
        this.setState({[type]: false});
      }
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              id="is-entire-home-checked"
              type="checkbox"
              onChange={this.update('entireHome')}
              value="true"
              />
              Entire home
          </label>
          <br/>
          <label>
            <input
              id="is-private-room-checked"
              type="checkbox"
              onChange={this.update('privateRoom')}
              value="true"/>
            Private room
          </label>
          <br/>
          <label>
            <input
              id="is-shared-home-checked"
              type="checkbox"
              onChange={this.update('sharedRoom')}
              value="true"/>
            Shared room
          </label>
          <br/>
          <input
            type="submit"
            value="Apply"/>
        </form>
      </div>
    );
  }

}


export default RoomTypeFilterForm;
