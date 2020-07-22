function timeout(givingTime) {
	return new Promise((resolve) => {
		setTimeout(resolve, givingTime);
	});
}
timeout(2000).then(() => {
	console.log('After the given time.');
});

function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

getCurrentLocation()
	.then((position) => {
		console.log('Latitude is ' + position.coords.latitude);
		console.log('Longitude is' + position.coords.longitude);
	})
	.catch((error) => {
		console.log(error);
	});
