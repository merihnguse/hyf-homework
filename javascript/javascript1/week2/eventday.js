//creating a function
function event(days) {
	const myDayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	//  random number creating
	const randomNumber = Math.floor(Math.random() * 5) + 2;
	today = myDayArr[randomNumber];
	// event day will be
	let getEventday = myDayArr[(randomNumber + Day) % 7];
	console.log('Today is ' + today);
	return getEventday;
}
let getEventday = event(1);
console.log('The event will held on  ' + getEventday);
