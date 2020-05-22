//creating function
function shouldWear(temperature) {
	if (temperature <= 7) {
		console.log('You should wear jackets that is made to winter.');
	} else if (temperature > 7 && temperature <= 14) {
		console.log('You can wear normal jacket.');
	} else {
		console.log('You can wear t-shirt.');
	}
}
//calling the function
shouldWear();
