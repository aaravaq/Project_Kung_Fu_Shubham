function initialize() {
	var lat=document.getElementById("lat").value;
	var lon=document.getElementById("lon").value;

	var myCenter=new google.maps.LatLng(lat,lon);

var mapProp = {
    center:myCenter,
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
console.log(lat + ' ,' + lon);

google.maps.event.addDomListener(document.getElementById('myButton'), 'click', initialize);
}








