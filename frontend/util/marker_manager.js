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
    this.bnbArrayToObject = this.bnbArrayToObject.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(bnbs) {

    // add markers
    bnbs.forEach(bnb => {
      if (this.markers[bnb.id] === undefined) {
        this.createMarkerFromBnb(bnb);
      }
    });

    // eliminate markers
    let bnbList = this.bnbArrayToObject(bnbs);
    Object.keys(this.markers).forEach(bnbId => {
      if (bnbList[bnbId] === undefined) {
        this.removeMarker(this.markers[bnbId], bnbId);
      }
    });
  }

  bnbArrayToObject(bnbArray) {
    let bnbList = {};

    bnbArray.forEach(bnb => {
      bnbList[bnb.id] = bnb;
    });

    return bnbList;
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

  removeMarker(marker, bnbId) {
    marker.setMap(null);
    delete this.markers[bnbId];
  }
}
