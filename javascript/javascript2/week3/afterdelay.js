const runAfterDelay = (delay, callback) => {
	setTimeout(callback, delay);
};

runAfterDelay(4000, function () {
	console.log('4 seconds delayed');
});
