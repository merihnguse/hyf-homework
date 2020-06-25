function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
	if (shouldTellFunnyJoke === true) {
		logFunnyJoke();
	} else {
		logBadJoke();
	}
}

function logFunnyJoke() {
	console.log('funny joke');
}

function logBadJoke() {
	console.log('bad joke');
}

jokeCreator(false, logFunnyJoke, logBadJoke);
