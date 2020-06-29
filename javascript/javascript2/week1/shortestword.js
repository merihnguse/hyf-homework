const danishWords = ['bil', 'plante', 'kaffe', 'bob', 'ø', 'planetarium'];

function findShortestWord(shortestWord) {
	let shortestdanishWord = '';
	for (let word of shortestWord) {
		if (typeof word === 'string' && (shortestdanishWord === '' || word.length < shortestdanishWord.length)) {
			shortestdanishWord = word;
		}
	}
	return shortestdanishWord;
}

console.log(findShortestWord(danishWords));
