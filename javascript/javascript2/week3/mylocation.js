const button = document.querySelector('button');

const myGeoLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	} else {
		return 'Not found';
	}
};

function success(position) {
	document.getElementById('lat').innerHTML = 'This is latitude: ' + position.coords.latitude;
	document.getElementById('long').innerHTML = 'Longitude will be: ' + position.coords.longitude;
}

button.addEventListener('click', success);
