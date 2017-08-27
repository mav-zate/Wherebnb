import React from 'react';


class BnbMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.745234, lng: -73.994006 },
      zoom: 16,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map } />
    );
  }
}


export default BnbMap;
