var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

//Create new variable with name
var newName = 'Marian';

//add new value to variable allNames if newName doesn't exist
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}