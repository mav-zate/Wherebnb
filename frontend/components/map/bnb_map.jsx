import React from 'react';
import MarkerManager from '../../util/marker_manager';


class BnbMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.745234, lng: -73.994006 },
      zoom: 13  ,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.bnbs);
    this.map.addListener('idle', () => {
      const latLngBounds = this.map.getBounds();
      const northEast = {
        lat: latLngBounds.getNorthEast().lat(),
        lng: latLngBounds.getNorthEast().lng(),
      };
      const southWest = {
        lat: latLngBounds.getSouthWest().lat(),
        lng: latLngBounds.getSouthWest().lng(),
      }
      const bounds = {
        northEast,
        southWest,
      };
      this.props.updateFilter('bounds', bounds);
    });
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
