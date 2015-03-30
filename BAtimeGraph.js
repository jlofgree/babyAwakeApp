// This function gets the date and returns the value
function getDate(element) {
	currentDate = new Date();
	return currentDate;
}
// This function calls date, places blue bar at timed location inside container
function setPosition(element) {
	currentDate = getDate();
	Hour = currentDate.getHours();
	Minute = currentDate.getMinutes();
	//Calculate: Hrs to mins, add mins, divides by total mins in day, returns as % in 24hrs
	document.getElementById(element).style.top = ((Hour * 60) + Minute) / 1440 * 100 + "%"; 
	document.getElementById(element).style.left = "0px";
}
// Store dates in an Array
function storeDate() {
	var dateArray = null;
	var dateString = localStorage.localStoredDates;
	if(!dateString) {
		dateArray = [];
	}
	else {
		dateArray = JSON.parse(dateString);
	}
	dateArray.push(currentDate);
	localStorage.localStoredDates = JSON.stringify(dateArray);
}
// Test what data I have
console.log(window.localStorage.localStoredDates);