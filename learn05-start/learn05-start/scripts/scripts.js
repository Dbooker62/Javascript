// Functions, objects, and events
// Functions, objects, and events
// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};
const dog2 = {
    heading: "Pet Case",
    image: "images/gold-dog.jpg",
    caption: "Sunbathing in the yard.",
    altTag: "Golden Dog."
};
const dog3 = {
    heading: "Puppy Case",
    image: "images/snow-dog.jpg",
    caption: "A night before christmas",
    altTag: "Puppy with a snowman."
};
const dog4 = {
    heading: "parental Case",
    image: "images/white-dogs.jpg",
    caption: "Mother playing with her puppy",
    altTag: "White Dogs."
};
function chooseDog(dog, btn) {
    if (dog == 1) {
        loadMe(dog1, 1)
    }
    else if (dog == 2) {
        loadMe(dog2, 2)
    }
    else if (dog == 3) {
        loadMe(dog3, 3)
    }
    else if (dog == 4) {
        loadMe(dog4, 4)
    }

    btn.style.display = 'None'
}
function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}