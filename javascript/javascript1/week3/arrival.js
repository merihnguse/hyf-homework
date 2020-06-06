const travelInformation = {
	speed: 60,
	destinationDistance: 475,
};
const travelTime = time(travelInformation);
let hours = Math.floor(travelTime);
let minutes = Math.ceil((travelTime % Math.floor(travelTime)) * 100);

function time(information) {
	return information.destinationDistance / information.speed;
}
if (minutes >= 60) {
	hours += Math.floor(minutes / 60);
	minutes -= 60;
}

console.log(hours + ' hours and ' + minutes + ' minutes ');
