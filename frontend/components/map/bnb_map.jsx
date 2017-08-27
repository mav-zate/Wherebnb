import React from 'react';
import MarkerManager from '../../util/marker_manager';


class BnbMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.745234, lng: -73.994006 },
      zoom: 16,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.bnbs);
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.bnbs);
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map } />
    );
  }
}


export default BnbMap;
