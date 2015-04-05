function testFunction() {
	var testArray = ["[1428101000000,1428102999999]"];  //1428101000000,1428102999999 <<< 5:00pm - 5:20pm
	localStorage.localStoredDates = testArray;
};
// Grab data and display in divs
function displayGraph() {
	var dateArray = null;
	var dateString  = localStorage.localStoredDates;
	if(!dateString) {
		dateArray = [];
	}
	else {
		dateArray = JSON.parse(dateString);
		var newDiv;
		for (var i = 0; i < dateArray.length; i++) {
			if (i % 2 == 0) {
				newDiv = document.createElement("div"); 
				newDiv.className = "bar";
				document.getElementById("holder").appendChild(newDiv); 
				newDiv.style.left = '0px';
				newDiv.style.top = (valueToPercent(dateArray[i])) + "%"; 
			} else {
				newDiv.style.height = (valueToPercent(dateArray[i])) - (valueToPercent(dateArray[i-1])) + "%";
			}
		}
	}	
};
// Make a pulse bar if click
function pulseBar() {
	var dateString  = localStorage.localStoredDates;
	var dateArray = JSON.parse(dateString);
	var newPulseDiv;

	if (dateArray.length % 2 == 0) {
		// Do Nothing
	} else {
		newPulseDiv = document.createElement("div");
		newPulseDiv.className = "pulseBar";
		document.getElementById("holder").appendChild(newPulseDiv);
		newPulseDiv.style.left = '0px';
		newPulseDiv.style.top = (valueToPercent(dateArray.length-1)) + "%";
	}
};
// Stores dateAsMilliseconds as String in an array in local storage
function storeDate() {
	var dateArray = null;
	var dateString = localStorage.localStoredDates;
	if(!dateString) {
		dateArray = [];
	}
	else {
		dateArray = JSON.parse(dateString);
	}
	dateArray.push(getDateInMil());
	localStorage.localStoredDates = JSON.stringify(dateArray);
};
// This function gets the date and returns as milliseconds
var getDateInMil = function() {
	var currentDate = new Date();
	return currentDate.getTime();
};
// Turns millisecond value into a percent number
var valueToPercent = function(element) {
	var currentDate = new Date(element);
	var percentValue;
	Hour = currentDate.getHours();
	Minute = currentDate.getMinutes();
	percentValue = ((Hour * 60) + Minute) / 1440 * 100;
	return percentValue;
};
// Test what data I have
console.log(window.localStorage.localStoredDates);