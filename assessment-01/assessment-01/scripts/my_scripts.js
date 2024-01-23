function initializePage() {
    // Function to add initial text when the page loads
    document.getElementById("myParagraph").innerHTML = "Hello! This is Daniel Booker, and I love nature.";
}

var currentIndex = 0; // Declare a global variable to track the current image index

function changeImage() {
    var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
    var image = document.getElementById("myImage");

    currentIndex = (currentIndex + 1) % images.length; // Increment the index and reset to 0 if it reaches the last image

    image.src = images[currentIndex];
}

function changeText() {
    document.getElementById("myParagraph").innerHTML = "These are few of my new photographs <3";
}

function showParagraph() {
    document.getElementById("myParagraph").classList.remove("hide");
}

function hideParagraph() {
    document.getElementById("myParagraph").classList.add("hide");
}

function changeImageWidth() {
    var image = document.getElementById("myImage");
    image.style.width = (image.style.width === "50%") ? "100%" : "50%";
}

function changeTextColor() {
    var paragraph = document.getElementById("myParagraph");
    paragraph.style.color = (paragraph.style.color === "blue") ? "#333" : "blue";
}

function toggleImage() {
    var image = document.getElementById("myImage");
    image.classList.toggle("hide");
}
