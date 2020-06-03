function getReply(order) {
	if (order === 'Hello my name is Benjamin') return 'Nice to meet you Benjamin';
	else if (order === 'What is your name') {
		return 'Your name is Benjamin';
	} else if (order === 'Adding fishing to my todo') {
		return 'fishing add to your todo';
	} else if (order === 'Remove fishing from my todo') {
		return 'Removed fishing from your todo';
	} else if (order === 'What is on my todo') {
		let myTodo = [];
		myTodo.push('fishing', 'Singing in the shower', 'Orange');
		console.log(myTodo);
		return 'You have fishing, signing and orange';
	} else if (order === 'What day is today?') {
		//Array of date, month and year
		let myDateMonthYearArr = [
			[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			[
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19,
				20,
				21,
				22,
				23,
				24,
				25,
				26,
				27,
				28,
				29,
				30,
				31,
			],
			[2020],
		];

		console.log(myDateMonthYearArr[1][3]);
		console.log(myDateMonthYearArr[0][9]);
		console.log(myDateMonthYearArr[2][0]);
		return '04.October.2020';
	}
}
function displayMessage() {
	console.log('Timer is done');
}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is your name'));
console.log(getReply('Adding fishing to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo'));
console.log(getReply('What day is today?'));
//console.log(getReply('Timer is done'));
setTimeout(displayMessage, 10000);
