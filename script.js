var map;
var marker;
var current;
var chicago = {lat: 41.887855, lng: -87.630347};
var philly = {lat: 39.9526, lng: 75.1652};
var paris = {lat: 48.8566, lng: 2.3522};
var athens = {lat: 37.9838, lng: 23.7275};

var places=["Chicago","Philadelphia","Paris","Athens"];

function initMap() {
  current = {lat: 41.887855, lng: -87.630347};
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: current
  });

  marker = new google.maps.Marker({
  position: current,
  map: map
  });
}
