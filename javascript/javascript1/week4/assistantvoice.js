let name = 'a mentioned name';
let givingName = '';
let todo = [];

function getReply(order) {
	//let name;
	if (order.includes('hello my name is')) {
		name = order.replace('hello my name is', '');
		return `Nice to meet you ${name}`;
	}
	} else if (order === 'Remove fishing from my todo') {
		return 'Removed fishing from your todo';
	} else if (order === 'What is on my todo') {
		let myTodo = [];
		myTodo.push('fishing', 'Singing in the shower', 'Orange');
		console.log(myTodo);
		return 'You have fishing, signing and orange';
	} else if (order.replace('What day is today?')) {
		//Array of date, month and year
		return new Date().toLocaleDateString('en-US', {
			weekday: 'long',
			day: 'numeric',
			year: 'numeric',
			month: 'long',
		});
	}
}
function displayMessage() {
	console.log('Timer is done');
}

console.log(getReply('What is your name'));
console.log(getReply('Adding fishing to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo'));
console.log(getReply('What day is today?'));
setTimeout(displayMessage, 10000);
