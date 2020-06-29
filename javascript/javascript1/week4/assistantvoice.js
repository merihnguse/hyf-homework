let todo = [];

function getReply(order) {
	let name;

	if (order.includes('hello my name ')) {
		name = order.replace('hello my name is', '');
		return `Nice to meet you ${name}`;
	} else if (order.startsWith('What is my name')) {
		name = 'Abel';
		return 'Your name is ' + name;
	}
	if (order.startsWith('Adding') && order.endsWith('todo')) {
		const todos = order.replace('Adding', '').replace('todo', '');
		todo.push(todos);
		return `${todo} is added`;
	}
	if (order.startsWith('Removing') && order.endsWith('my todo')) {
		const todos = order.replace('Adding', '').replace('todo', '');
		todo.splice(todo.indexOf(2));
		return `removed ${todos}`;
	}
	if (order.includes('What day is today?')) {
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

console.log(getReply('hello my name is Merih'));
console.log(getReply('hello my name is'));
console.log(getReply('What is my name?'));
console.log(getReply('Adding fishing to my todo'));
console.log(getReply('Removing fishing from my todo'));
console.log(getReply('What day is today?'));
//console.log(getReply('Timer is done'));
setTimeout(displayMessage, 10000);
