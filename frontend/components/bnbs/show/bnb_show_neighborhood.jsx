import React from 'react';


class BnbShowNeighborhood extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: this.props.center,
      zoom: 14,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    const neighborhood = new google.maps.Circle({
      strokeColor: '#008489',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#008489',
      fillOpacity: 0.35,
      map: this.map,
      center: this.props.center,
      radius: 500,
    });
  }

  render() {
    return (
      <div className="show-panel">
        <div className="show-panel-title">
          The neighborhood
        </div>
        <div id="bnb-show-map-container" ref={ map => this.mapNode = map }/>
      </div>
    );
  }
}


export default BnbShowNeighborhood;
