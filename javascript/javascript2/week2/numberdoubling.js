let numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11];

const doubleNumber = numbers.filter(function (item) {
	if (item % 2 !== 0) return item;
});

//console.log(doubleNumber);

const newNumbers = doubleNumber.map(function (number) {
	return number * 2;
});

console.log('The double numbers are', newNumbers);
