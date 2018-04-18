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

function goto(location, title){
  map.panTo(location);
  map.setZoom(12);
  marker = new google.maps.Marker({
  position: location,
  map: map
  });
  if (title==places[0]){
    document.getElementById("demo").innerHTML = "Chicago, IL: A beautiful city in the midwest. I moved out here to attend Illinois Tech two years ago.";
    }
  else if (title==places[1]){
    document.getElementById("demo").innerHTML = "Philadelphia, PA: My hometown, a small city with great food and rich history.";
    }
  else if (title==places[2]){
    document.getElementById("demo").innerHTML = "Paris, France: One of the most beautiful places I have ever visited, a truly magical place.";
    }
  else if (title==places[3]){
    document.getElementById("demo").innerHTML = "Athens, Greece: Another one of my favorite places, very large with historical beauty in every direction.";
    }
  else
    {
    document.getElementById("demo").innerHTML = null;
    }
}
