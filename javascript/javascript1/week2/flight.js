// declaration of variable
const firstname = 'Hewan';
const surname = 'Adam';

// declaration of function
function getFullName(firstname, surname, useFormalName = true) {
	if (useFormalName === true) {
		return 'Lord' + ' ' + firstname + ' ' + surname;
	} else {
		return firstname + ' ' + surname;
	}
}
// calling function
fullName1 = getFullName(firstname, surname, true);
console.log(fullName1);

fullName2 = getFullName(firstname, surname);
console.log(fullName2);
