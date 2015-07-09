function loaddata() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var cityName=document.getElementById("name").value;
    var address = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityName;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
               //document.getElementById("googleMap").innerHTML = xmlhttp.responseText;
              var data=JSON.parse(xmlhttp.responseText);
              var latitude = data.results[0].geometry.location.lat;
              var longitude = data.results[0].geometry.location.lng;
              //console.log(latitude + ' @' + longitude);
              //var myCenter=new google.maps.LatLng(latitude,longitude);
              //loadmap(myCenter);
              document.getElementById("lat").value = latitude;
              document.getElementById("lon").value = longitude;
              }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    xmlhttp.open("GET", address, true);
    xmlhttp.send();
}

function initialize() {
  var lat=document.getElementById("lat").value;
  var lon=document.getElementById("lon").value;

  var myCenter=new google.maps.LatLng(lat,lon);

var mapProp = {
    center:myCenter,
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("map"), mapProp);
  var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
console.log(lat + ' ,' + lon);

google.maps.event.addDomListener(document.getElementById('but'), 'click', initialize);
}

















/*function initialize() {
	var cityName=document.getElementById("name").value;
	
  var address = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityName;
var geocoder = new google.maps.Geocoder();
 
geocoder.geocode({ 'address': address }, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
          var latitude = results[0].geometry.location.lat();
          var longitude = results[0].geometry.location.lng();

          console.log(latitude);
          console.log(longitude);
          var myCenter=new google.maps.LatLng(latitude,longitude);

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


          
     }
     else {
          alert('Geocode error: ' + status);
     }

  });

  }
  */  