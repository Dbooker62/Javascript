class Airplane {
    constructor(model, capacity, range, speed) {
        this.model = model;
        this.capacity = capacity;
        this.range = range;
        this.speed = speed;
    }

    // Static method to compare two airplanes based on their range
    static compareRange(airplane1, airplane2) {
        return airplane1.range > airplane2.range ? airplane1.model : airplane2.model;
    }

    // Instance method to calculate flight time based on distance
    calculateFlightTime(distance) {
        return distance / this.speed;
    }


    displayStats() {
        return `Model: ${this.model}, Capacity: ${this.capacity}, Range: ${this.range} km, Speed: ${this.speed} km/h`;
    }
}

// Function to display the results in HTML paragraphs
function updateHTMLWithAirplaneStats() {

    const airplane1 = new Airplane('Boeing 747', 366, 14815, 920);
    const airplane2 = new Airplane('Airbus A380', 555, 15700, 1020);

    // Selecting the paragraphs
    const airplane1StatsParagraph = document.getElementById('airplane1Stats');
    const airplane2StatsParagraph = document.getElementById('airplane2Stats');
    const comparisonParagraph = document.getElementById('comparison');
    const flightTimeParagraph = document.getElementById('flightTime');

    // Updating the HTML content
    airplane1StatsParagraph.innerText = airplane1.displayStats();
    airplane2StatsParagraph.innerText = airplane2.displayStats();
    comparisonParagraph.innerText = `Longer range: ${Airplane.compareRange(airplane1, airplane2)}`;
    flightTimeParagraph.innerText = `Flight time of ${airplane1.model} over 1000 km: ${airplane1.calculateFlightTime(1000).toFixed(2)} hours`;
}

// Call the function to display the stats on page load
window.onload = updateHTMLWithAirplaneStats; 
