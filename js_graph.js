var aGraph = new Graph();
// ==============================
// GRAPH
// ==============================
function Graph(){
	// ==========================
	// attributes
	// ==========================

	// ==========================
	// methods
	// ==========================

	// check to see if there is data
	var isThereData = function (){
		if(localStorage.data === undefined){
			return false;
		}else{
			return true;
		}
	};

	// Register Listerner to the Input Button
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

	// Create the graph when there is data
	var createGraph_data = function(){
		// grab the data
		// loop the data
		// put the data in arrays in respective to their dates
		// create the divs
		// show it 

	};

	// Create the graph when there is NO DATA
	var createGraph_noData = function (){
		changeInputResponse(true);
	};


	var changeInputResponse = function (isSleep){
		if(isSleep){
			document.getElementById("input").src = "content/sun-icon.png";
		}else{

		}
	};

	// ==========================
	// contrusctor (this is what is going to run when this object is created)
	// ==========================
	registerButtonListeners();
	if(isThereData()){
		createGraph_data();
	}else{
		createGraph_noData();
	}
}

















