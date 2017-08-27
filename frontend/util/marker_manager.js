var MARKER_ICON = {
    path: 'M 0,0 45,0 45,25 28,25 22.5,30 17,25 0,25 z',
    strokeColor: '#484848',
    fillColor: '#FFF',
    fillOpacity: 1,
    anchor: new google.maps.Point(22, 25),
    origin: new google.maps.Point(0, 0),
    size: new google.maps.Size(45, 25),
    labelOrigin: new google.maps.Point(22, 13),
  };

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
      label: {
        text: `$ ${Math.floor(bnb.price)}`,
        fontSize: '15px',
      },
      icon: MARKER_ICON,
    });
  }
}
