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
function logOutSeriesText(timeTakes) {
	let totalDaysTook;
	let totalHoursTook;
	let totalMinutesTook;
	let totalSeriesTimeTook;
	let totalTimeTook = 0;
	let lifespan = 80;
	const numberDaysInYear = 365;
	const numberHoursInDay = 24;
	const numberMinutesInHour = 60;

	for (let i = 0; i < timeTakes.length; i++) {
		totalDaysTook = (timeTakes[i].days / (numberDaysInYear * lifespan)) * 100;
		totalHoursTook = (timeTakes[i].hours / (numberDaysInYear * lifespan * numberHoursInDay)) * 100;
		totalMinutesTook =
			(timeTakes[i].minutes / (numberDaysInYear * lifespan * numberHoursInDay * numberMinutesInHour)) * 100;
		totalSeriesTimeTook = totalDaysTook + totalHoursTook + totalMinutesTook;
		console.log(timeTakes[i].title + ' took ' + totalSeriesTimeTook.toFixed(4) + ' % 0f my life');
		totalTimeTook += totalSeriesTimeTook;
	}
	console.log('Total I have spent ' + totalTimeTook.toFixed(4) + ' % of my life');
}
logOutSeriesText(seriesDurations);
