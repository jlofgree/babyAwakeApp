function runScript(){
	loadTips();
	loadGraph();
}


// ==============================
// GRAPH
// ==============================

function loadGraph(){
	var aGraph = new Graph();
}

function run() {
	var aGraph = new Graph();

}

function Graph(){
	// ==========================
	// attributes
	// ==========================

	// ==========================
	// methods
	// ==========================
	var isThereData = function (){
		if(localStorage.data === undefined){
			return false;
		}else{
			return true;
		}
	};

	var registerButtonListeners = function (){
		// assign the listerns to the buttons 
		document.getElementById("input").addEventListener("click", function (){
			//if(the last sleepbar object in the stored array has a status false) then finish this object
			//   by adding the "to_wake" attribute and chaing the status to TRUE
			alert("asdsad");

			// create the "sleepBar" object
			// add the "sleep time" to that object
			// change the status to "false"
			// change the icon
			// store the sleepbar object
		});
	};

	var createGraph_data = function(){
		// grab the data
		// loop the data
		// put the data in arrays in respective to their dates
		// create the divs
		// show it 

	};

	var createGraph_noData = function (){

	};

	// ==========================
	// contrusctor (this is what is going to run when this object is created)
	// ==========================
	registerButtonListeners();
}


























// This function will begin to run as soon as the body elements load.
function loadTips() {
    /*
    // the purpose of this code is: 
    // 1- to pull a fact through an AJAX request
    // 2- to populate a div element with text
    // 3- to trigger a css animation -- popping out at the viewer
    // 4- to respond to a timer. A new fact will be pulled at random (or in sequence for the sake of keeping things simple)
    // 5- optional: adding audio to accompany the animation. for kicks. 
    */

    // the following code sets the ajax request
    var request = new XMLHttpRequest();
    request.open("GET", 'Facts.txt', true);

    // the following code runs the function that parses the text file into a usable array once it picks up the data. 
    request.onreadystatechange = function() {

        if (request.readyState == 4) {
            // factsArray will contain the values as an array: ["string", "string", "another string"];
            var factsArray = JSON.parse(request.responseText);

            // I send out array values through a loop

            var i = 1; //  counter set to 0 (so that I can pull index 0 from an array)
            var newFact = function() { // create a loop function

                //I'll begin with broadcasting index 0, since all the others will be looped in later
                if (i == 1) {
                    document.getElementById('facts').innerHTML = factsArray[0];
                }


                setTimeout(function() { //  call a 30 second setTimeout when the loop is called
                        document.getElementById('facts').innerHTML = factsArray[i]; //write the array value to the document
                        // add in the css animation manipulation here

                        i++; //  increment the counter
                        if (i < factsArray.length) { //  if the counter < the length of the array, call the loop function
                            newFact(); //  ..  again which will trigger another 
                        } else {
                            i = 1;
                            newFact();
                        }

                        //  ..  setTimeout()
                    }, 3500); // this is the amount of seconds passing by (in milliseconds)
            };
            newFact(); // call this function to begin the loop. 
        }
        //I am now outside of the IF statement.

    };
    request.send();

    // the loop will assure that one fact is pulled at a time.
    // this loop will respond to a timer. 
}
