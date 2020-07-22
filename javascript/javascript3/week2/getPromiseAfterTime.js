//one parameter function

const oneParameter = function (resolveAfter) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('I am called asyncronously!');
		}, resolveAfter * 500);
	});
};
oneParameter(16).then((result) => console.log(result));

//Usung async and await
async function promiseResolved(resolveAfter) {
	let asyncPromise = await oneParameter(resolveAfter);
	console.log(asyncPromise);
}

promiseResolved(7);
