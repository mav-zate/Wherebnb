import React from 'react';
import MarkerManager from '../../util/marker_manager';


class BnbMap extends React.Component {

  componentDidMount() {
    // instantiate map and markers
    const mapOptions = {
      center: { lat: 40.745234, lng: -73.994006 },
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.bnbs);

    // get bounds whenever map moves
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

    // make autocomplete feature
    var autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('google-map-autocomplete-input')
    );

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);
      }
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
