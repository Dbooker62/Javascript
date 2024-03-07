// Iterables: https://www.w3schools.com/js/js_iterables.asp
// Read the page
// Demonstrate iteration of a list 
// Create a list of movies, books, or games at least 5 items long and 
// display them in the list paragraph
const items = ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Memento'];
document.getElementById('list').innerText = items.join(', ');

// JS Sets
// https://www.w3schools.com/js/js_sets.asp
// Create a set with at least 5 song titles in it
// display the contents of the set in the set1 paragraph (use iteration)
const songs = new Set(['Imagine', 'Bohemian Rhapsody', 'Stairway to Heaven', 'Like a Rolling Stone', 'Yesterday']);
document.getElementById('set1').innerText = Array.from(songs).join(', ');

// add two more songs to the set then display in the set2 paragraph
songs.add('Smells Like Teen Spirit').add('Hotel California');
document.getElementById('set2').innerText = Array.from(songs).join(', ');

// Maps
// https://www.w3schools.com/js/js_maps.asp
// Maps are like dictionaries in python
// Create a map with five names and emails in it.
// Display the contents of the map in map1 use the forEach() method (bottom of the reference page)
const emails = new Map([
    ['John', 'john@example.com'],
    ['Sarah', 'sarah@example.com'],
    ['Amy', 'amy@example.com'],
    ['Bob', 'bob@example.com'],
    ['Alice', 'alice@example.com']
]);
let content = "";
emails.forEach((value, key) => {
    content += `${key}: ${value} <br>`;
});
document.getElementById('map1').innerHTML = content;

// add two new names and emails and display in map2 use the forEach() method
emails.set('Michael', 'michael@example.com').set('Emma', 'emma@example.com');
content = "";
emails.forEach((value, key) => {
    content += `${key}: ${value}<br>`;
});
document.getElementById('map2').innerHTML = content;

// get and display the email of one person, display in map3
const personEmail = emails.get('Amy');
document.getElementById('map3').innerText = `Amy: ${personEmail}`;
