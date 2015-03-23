// This function will begin to run as soon as the body elements load.
function runScript() {
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
            factsArray = JSON.parse(request.response);

            // I send out array values through a loop

            var i = 1; //  counter set to 0 (so that I can pull index 0 from an array)
            function newFact() { // create a loop function

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
                    }, 1500) // this is the amount of seconds passing by (in milliseconds)
            }
            newFact(); // call this function to begin the loop. 
        }
        //I am now outside of the IF statement.

    }

    request.send();

    // the loop will assure that one fact is pulled at a time.
    // this loop will respond to a timer. 

}