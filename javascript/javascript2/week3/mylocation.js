const button = document.querySelector('button');

const myGeoLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	} else {
		return 'Not found';
	}
};

function locationDisplayed(position) {
	const data = 'This is latitude: ' + position.coords.latitude;
	const datatype = 'Longitude will be: ' + position.coords.longitude;
	document.getElementById('lat').innerHTML = data;
	document.getElementById('long').innerHTML = datatype;
}

button.addEventListener('click', locationDisplayed);
