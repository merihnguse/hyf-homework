function earthLogger(name, planet) {
	return name + planet;
}
//console.log('Earth', 'the fourth planet from the sun.');

function satrunLogger(planetName, size) {
	return size + planetName;
}
//console.log('The second largest planet in the solar system is ', 'Satrun.');
function planetLogFunction() {
	earthLogger();
	satrunLogger();
}
planetLogFunction(earthLogger);
planetLogFunction(satrunLogger);
//console.log(planetLogFunction(earthLogger('Earth', 'the fourth planet from the sun.')));
