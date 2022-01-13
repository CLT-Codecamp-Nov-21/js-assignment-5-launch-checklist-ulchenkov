// Write your JavaScript code here!

window.addEventListener("load", function() {

    document.querySelector("form").addEventListener("submit", (event) => {

        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        
        let alertMsg = ""
        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
            alertMsg = "All fields are required!";
        } else if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoMass) !== "Is a Number") {
            alertMsg = "Make sure to enter valid information for each field!";
        }
        
        if (alertMsg !== "") {
            alert(alertMsg);
            event.preventDefault();
        } else {
            formSubmission(document, "", pilotName, copilotName, fuelLevel, cargoMass);
        }
    })

   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
});