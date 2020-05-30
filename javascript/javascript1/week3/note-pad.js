//pushing objects to notes
const notes = [];

function saveNote(content, id) {
	notes.push({ content: content, id: id });
}
// declaring content & id
saveNote('Pick up groceries', 1);
saveNote('event time', 2);
saveNote('event date', 3);
saveNote('event place', 4);
saveNote('event importance', 5);
console.log(notes);

//creating a function to see a specific note
function getNote(id) {
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].id === id) {
			return notes[i];
		} else {
			return 'error!';
		}
	}
}
const firstNote = getNote(2);
console.log(firstNote);

// function created to read all the notes
function logOutNotesFormatted() {
	for (let j = 0; j < notes.length; j++) {
		console.log('The note with id ' + '' + notes[j].id + ' ' + ' has the following note ' + '' + notes[j].content);
	}
}
logOutNotesFormatted();
