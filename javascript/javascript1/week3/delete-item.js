const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
for (let i = 0; i < names.length; i++) {
	//const names = names[i];
	if (names === nameToRemove) {
		names.splice(i, 1); // deletes ahmad
	}
}
console.log(names);
