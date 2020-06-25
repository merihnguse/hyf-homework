const buttton = document.querySelector('button');
const myGeoLocation = () => {
	if (navigator.geolocation === success) {
		navigator.geolocation.getCurrentPosition(success);
	} else {
		return 'Not found';
	}
};

function success(position) {
	document.getElementById('text').innerHTML =
		'This is latitude: ' + position.coords.latitude + '<br> Longitude will be: ' + position.coords.longitude;
}

button.addEventListener('click', myGeoLocation);
