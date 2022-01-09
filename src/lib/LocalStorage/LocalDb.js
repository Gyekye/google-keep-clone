/**
 * * Wrapping LocalStorage actions in custom functions
 * * LocalStorage.setItem() => saveNotesIntoDb(notesKey, notesData:stringifiedData)
 * * LocalStorage.getItem() => getNotesFromDb(notesKey)
 * 8
 */


export const saveNotesIntoDb = (key, notes) => {
	// First stringify data
	const stringifiedNotes = JSON.stringify(notes);
	// Saves Item into LocalStorage
	try{
		// Saves Notes Data into Local storage
		localStorage.setItem(key, stringifiedNotes);
	}
	catch ( error ){
		// Throws an error if setItem method fails
		console.log(error);
	}
}

export const getNotesFromDb = ( key ) =>{
	// First init a variable to hold retrieved data
	let retrievedData;
	try{
		// trys to retrieve item and parse it to its original form
	  	retrievedData = JSON.parse(localStorage.getItem(key));
	}
	catch ( error ){
		// throws error if getItem fails
		console.log(error)
	}
	// returns retrievedData
	return retrievedData;
}