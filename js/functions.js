/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    var x = document.getElementById("topNav");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}


function closeMenu() {
    document.getElementById("topNav").className = "";
}

function mapLocation2() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-12.9943256,-38.4510021), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function mapLocation() {
  var uluru = {lat: -12.9943438, lng: -38.4495657};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
