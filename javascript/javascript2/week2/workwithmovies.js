const movies = [
	{ title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
	{ title: "'A' gai wak", year: 1983, rating: 7.4, votes: 11942, running_times: 6300 },
	{ title: "'Breaker' Morant", year: 1980, rating: 7.9, votes: 10702, running_times: 6420 },
	{ title: "'Crocodile' Dundee II", year: 1988, rating: 5.5, votes: 47180, running_times: 6480 },
	{ title: '(500) Days of Summer', year: 2009, rating: 7.7, votes: 412368, running_times: 5700 },
	{ title: '*batteries not included', year: 1987, rating: 6.6, votes: 25636, running_times: 6360 },
	{ title: "...E tu vivrai nel terrore! L'aldilà", year: 1981, rating: 6.9, votes: 16484, running_times: 5220 },
	{ title: '...and justice for all.', year: 1979, rating: 7.4, votes: 25408, running_times: 7140 },
];
console.log(movies);
//short title films
const shortFilmTitle = movies.filter((short) => short.title.length < 2);
console.log('shortFilmTitle', shortFilmTitle);

//long title film
const longFilmTitle = movies.filter((long) => long.title.length > 55);
console.log('longFilmTitle', longFilmTitle);

//year film produced
const filmYearMade = movies.filter((yearmade) => yearmade.year >= 1980 && yearmade.year <= 1989);
console.log('filmYearMade', filmYearMade);

//ceating new key
movies[3].key = 'Tag';
movies[3].values = '';
const addingTag = movies.filter((film) => {
	if (film.rating >= 7) return (film.Tag = 'Good');
	if (film.rating >= 4 && film.rating < 7) return (film.Tag = 'Average');
	if (film.rating < 4) return (film.Tag = 'Bad');
});
console.log('addingTag', addingTag);

//filtering movies rated higher than 6
const higherRatedMovies = movies.filter((rated) => rated.rating > 6);
console.log('higherRatedMovies', higherRatedMovies);

const moviesRating = higherRatedMovies.map((rate) => rate.rating);
console.log('moviesRating', moviesRating);

//count the number movies
const countMovies = movies.filter(function (film) {
	if (film.title.includes('surfer') || film.title.includes('Alien') || film.title.includes('Benjamin')) return film;
});

console.log('countMovies', countMovies);

//duplicated words
const titleDuplicatedWords = movies.filter((duplicatedWords) => {
	let words = /\b(\w+)\b.*\b\1\b/g.test(duplicatedWords.title);
	return words;
});
console.log('titleDuplicatedWords', titleDuplicatedWords);
