function addDate() {
    let today = new Date();
    alert(today);
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("numRooms").addEventListener("change", generateRoomInputs);
    generateRoomInputs(); // Call it here to generate default room inputs
}


function generateRoomInputs() {
    const roomsContainer = document.getElementById("roomsContainer");
    roomsContainer.innerHTML = ''; // Clear previous inputs
    let numberOfRooms = parseInt(document.getElementById("numRooms").value);
 
    for (let i = 1; i <= numberOfRooms; i++) {
        roomsContainer.innerHTML += `
            <div class="room" id="room${i}">
                <h3>Room ${i}</h3>
                <label for="rm${i}Length">Room${i} length:</label>
                <input type="text" id="rm${i}length" /> <br />
                <label for="rm${i}width">Room ${i} width:</label>
                <input type="text" id="rm${i}width" /> <br />
                <label for="rm${i}height">Room${i} height:</label>
                <input type="text" id="rm${i}height" /> <br />
                <label for="rm${i}cost">Room ${i} cost:</label>
                <input type="text" id="rm${i}cost" readonly /> <br />
            </div>
        `;
    }
}


function estimate() {
    let name = document.getElementById("name").value;
    let numberOfRooms = parseInt(document.getElementById("numRooms").value);
    let totalCost = 0;

    for (let i = 1; i <= numberOfRooms; i++) {
        let length = parseFloat(document.getElementById(`rm${i}length`).value);
        let width = parseFloat(document.getElementById(`rm${i}width`).value);
        let height = parseFloat(document.getElementById(`rm${i}height`).value);
        let totalSqft = ((length * height * 2) + (length * width * 2));
        let cost = (totalSqft * .65);
        document.getElementById(`rm${i}cost`).value = cost.toFixed(2);
        totalCost += cost;
    }

    document.getElementById('estimate').innerHTML = (name + ", your estimated value is " + "$" + totalCost.toFixed(2) + ".");
}










