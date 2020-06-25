let arrayFunction = [
	function () {
		console.log('Merih');
	},
	function () {
		console.log('Nguse');
	},
	function () {
		console.log('Merih Nguse');
	},
];

arrayFunction.forEach((name) => {
	name();
});
