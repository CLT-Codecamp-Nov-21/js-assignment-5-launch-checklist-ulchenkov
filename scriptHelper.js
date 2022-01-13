// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}" alt="${name}" title="${name}"> `;
    
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let isFuelLevelEnough = Number(fuelLevel) >= 10000;
    let isCargoMassLowEnough = Number(cargoLevel <= 10000);

    let pilotStatus = `Pilot ${pilot} is ready for launch`;
    let copilotStatus = `Co-pilot ${copilot} is ready for launch`;
    let fuelStatus = `Fuel level ${isFuelLevelEnough ? "high enough" : "too low"} for launch`;
    let cargoStatus = `Cargo mass ${isCargoMassLowEnough ? "low enough" : "too high"} for launch`;

    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    if (isFuelLevelEnough && isCargoMassLowEnough) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "hidden";
    } else {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        
        document.getElementById("pilotStatus").innerHTML = pilotStatus;
        document.getElementById("copilotStatus").innerHTML = copilotStatus;
        document.getElementById("fuelStatus").innerHTML = fuelStatus;
        document.getElementById("cargoStatus").innerHTML = cargoStatus;
        faultyItems.style.visibility = "visible";
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
    });
    
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
