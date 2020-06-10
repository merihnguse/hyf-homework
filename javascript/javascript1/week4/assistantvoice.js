function getReply(order) {
	if (order.includes('Hello my name')) {
		return 'Nice to meet you Benjamin';
	} else if (order.startsWith('Adding fishing to my todo')) {
		return 'fishing add to your todo';
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
//console.log(getReply('Timer is done'));
setTimeout(displayMessage, 10000);
