function initMap() {
	var map, marker,
		mapDiv = document.getElementById('map'),
		center = {
			lat: 41.920187,
			lng: 12.497144
	}
	var markers = [{
		position : center,
		icon : 'img/marker.png'
		},{
			position : { lat: 46.052630, lng: 4.845418},
			icon : 'img/marker.png'
		},{
			position : { lat: 40.680830, lng: -3.672029},
			icon : 'img/marker.png'
		}];

		map = new google.maps.Map(mapDiv, {
			center: center,
			zoom: 5.7 
		});

	markers.forEach(function(marker){
		new google.maps.Marker({
			position: marker.position,
			map:map,
			icon: 'img/marker.png'
			})	
	})
}
