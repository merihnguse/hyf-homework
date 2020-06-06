// array of series film
const seriesDurations = [
	{
		title: 'Arrow',
		days: 4,
		hours: 23,
		minutes: 0,
	},
	{
		title: 'Revolution',
		days: 1,
		hours: 5,
		minutes: 20,
	},
	{
		title: 'Lost',
		days: 3,
		hours: 18,
		minutes: 0,
	},
];
// function declaration
function logOutSeriesText(seriesTimeTakes) {
	const lifespan = 80 * 365 * 24 * 60; //in minuttes
	let total = 0;
	for (let i = 0; i < seriesTimeTakes.length; i++) {
		const seriesTimeTake = seriesTimeTakes[i].days * 24 * 60 + seriesTimeTakes[i].hours * 60;
		const percent = (seriesTimeTake / lifespan) * 100;
		total += percent;
		console.log(seriesTimeTakes[i].title + ' took ' + total.toFixed(4) + ' % 0f my life');
	}
	console.log('Total I have spent ' + total.toFixed(4) + ' % of my life');
}
logOutSeriesText(seriesDurations);
