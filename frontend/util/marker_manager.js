export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromBnb = this.createMarkerFromBnb.bind(this);
  }

  updateMarkers(bnbs) {
    bnbs.forEach(bnb => {
      if (this.markers[bnb.id] === undefined) {
        this.createMarkerFromBnb(bnb);
      }
    });
  }

  createMarkerFromBnb(bnb) {
    this.markers[bnb.id] = new google.maps.Marker({
      position: { lat: bnb.lat, lng: bnb.lng },
      map: this.map,
    });
  }
}
