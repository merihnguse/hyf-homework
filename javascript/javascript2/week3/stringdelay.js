let clicked;
function callingIt() {
	clicked = setTimeout(notThisFunctionName, 3000, 'delay comes first', 'String came after');
}

function notThisFunctionName(delay, stringToLog) {
	document.getElementById('afterfive').innerHTML =
		'Parameters passed to notThisFunctionName() <br>' + delay + '<br>' + stringToLog + '<br>';

	console.log('Called after 5 seconds');
}
