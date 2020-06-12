const danishWords = ['bil', 'plante', 'kaffe', 'bob', 'ø', 'planetarium'];

function findShortestWord(shortestWord) {
	let shortestDanishWord = '';
	for (let word of shortestWord) {
		if (typeof word === 'string' && (shortestDanishWord === '' || word.length < shortestWord.length)) {
			shortestDanishWord = word;
		}
	}
	return shortestDanishWord;
}

console.log(findShortestWord(danishWords));
