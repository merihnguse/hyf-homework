fetch('https://jsonplaceholder.typicode.com/photos')
	.then((response) => response.json)
	.then((photo) => {
		setTimeout(() => {
			console.log(photo);
		}, 3000);
	})
	.catch((error) => {
		console.log('error');
		console.error(error);
	});

function fetchafter3Sec(photo) {
	return new promise((resolve) => {
		setTimeout(() => {
			resolve(photo);
		}, 3000);
	});
}
//console.log(photo);
