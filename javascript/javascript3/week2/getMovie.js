const movie = fetch(
	'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
);

movie
	.then((response) => response.json())
	.then((movie) => {
		console.log(movie);
		// creating bad movies
		const badMovie = movie.filter((movie) => movie.rating < 4);
		console.log(badMovie);
		// bad movies from 2000
		const badMovieAfter2000 = movie.filter((movie) => movie.rating < 4 && movie.year >= 2000);
		console.log(badMovieAfter2000);
	});
