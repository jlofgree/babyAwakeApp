new Graph();

// ==============================
// GRAPH Prototype
// ==============================
function Graph(){
	// ==========================
	// attributes
	// ==========================

	// ==========================
	// methods
	// ==========================

	// check to see if there is data in the localStorage.data
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
		document.getElementById("input-img").addEventListener("click", function (){
			/* If the input-button has been pressed then what does it mean? We have to see if the baby is sleeping
				If baby is sleeping (true) then it means that
					- the sleeping bar will stop growing
					- the user has pressed to record that the baby is awake which means that the input-image should be change to a "moon"  
					  so the user can later press the "moon" button to record that the baby went to sleep again. 
				If baby is not sleeping (false) then
					- the sleeping bar will neeed to be created and start growing until the user stops it by pressing the button
					- the user has pressed to record that the baby went to sleep which means that the input-image will change to a "sun" so 
					  the user can later press the "sun" to record that the baby is awake ( no more sleeping)
			*/
			if(isBabySleeping()){
				console.log("===== baby is awake =====");
				var obj = grabLastSleepBar();	// grab last SleepBar object
				obj.setSleepEnd();				// modify the SleepBar object by adding the datetime in to "sleep_end"
				replaceLastSleepBar(obj);		// replaces the the last SleepBar-object with the modified one
				changeIconToMoon(true);			// change it to the sun

			}else{
				console.log("===== baby is sleeping ===== ");
				// create a sleep bar
				var aSleepBar = new SleepBar();
				aSleepBar.setSleepStart();

				// if localStorage.data is empty then create a new array
				// if is not EMPTY, append the new SleepBar-obj to the existing localstorage.data
				if(isThereData()){
					var data = JSON.parse(localStorage.data);
					data.push(aSleepBar);
					localStorage.data = JSON.stringify(data);
				}else{
					var anArray = [];
					anArray.push(aSleepBar);
					localStorage.data = JSON.stringify(anArray);

					// TODO: // show new SleepBar in graph
				}

				changeIconToMoon(false);			// change it to the moon
			}

			console.log(localStorage.data);
		});
	};

	// Create the graph when there is data
	var createGraph_data = function(){
		changeIconToMoon(!isBabySleeping());

		// TODO: // show SleepBars from the past


	};

	// Create the graph when there is NO DATA
	var createGraph_noData = function (){
		changeIconToMoon(true); 
		// localStorage.data = [];
	};


	// change the icons
	var changeIconToMoon = function (arg){
		if(arg){
			document.getElementById("input-img").src = "content/Moon-icon.png";
		}else{
			document.getElementById("input-img").src = "content/sun-icon.png";
		}
	};

	// checks to see if the baby is still sleeping
		// true - means that the last SleepBar has null for "sleep_end". 
		// false - means that the last SleepBar has a value for "sleep_end"
	var isBabySleeping = function(){
		if(!isThereData()){
			return false;
		}

		var aDataArr = JSON.parse(localStorage.data);
		var lastSleepBarObj = aDataArr[aDataArr.length - 1];
		if(lastSleepBarObj.sleep_end === null){
			return true;
		}else{
			return false;
		}
	};

	// grabs the last SLeepBar-object in the data array. It also adds a function to the object called "setSleepEnd" so it can be used
	var grabLastSleepBar = function (){
		var aDataArr = JSON.parse(localStorage.data);
		var obj = aDataArr[aDataArr.length - 1];
		obj.setSleepEnd = function (){
			this.sleep_end = (new Date()).getTime();
		};	
		return obj;	
	};

	// modifies the last SleepBar-object by removing (pop) the last SleepBar-object and adding (push) the modfied SleepBar-object.
	// This function basically closes/wraps the SleepBar
	var replaceLastSleepBar = function (newSleepBar){
		var aDataArr = JSON.parse(localStorage.data);
		aDataArr.pop();
		aDataArr.push(newSleepBar);
		localStorage.data = JSON.stringify(aDataArr);
	};

	// ==========================
	// contrusctor (this is what is going to run when this object is created)
	// ==========================
	
	// register the button listeners
	registerButtonListeners();		

	// check to see if there is data
	if(isThereData()){
		createGraph_data();
	}else{
		createGraph_noData();
	}
}


// ====================
// SleepBar Prototype
// ====================
function SleepBar(){

	this.sleep_start = null; // went to sleep
	this.sleep_end = null;  // has awaken

	this.setSleepStart = function (){
		this.sleep_start = (new Date()).getTime();
	};
}
















