function start() {
    // Write your name to the name h1
    document.getElementById("name").textContent = "Daniel S Booker"; // Replace 'Your Name' with your actual name

    // Create an array called months that holds all the months of the year
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Use the index to print the month May from the months array to the may paragraph
    document.getElementById("may").textContent = months[4];
 
    // Print the length of the month array to the length paragraph
    document.getElementById("length").textContent = months.length;

    // Loop through all of the months array and print each month to the months paragraph
    document.getElementById("months").textContent = months.join(', ');

    // Convert the months array to a string and print to the string paragraph
    document.getElementById("string").textContent = months.toString();

    // Create two new arrays - weekends and weekdays, add the appropriate days to each
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekends = ["Saturday", "Sunday"];

    // Join the two arrays into a new array - week
    const week = weekdays.concat(weekends);

    // Print the contents of week to the week paragraph
    document.getElementById("week").textContent = week.join(', ');

    // Use the pop method to remove the last element of the week array, then print the week array to the pop paragraph
    week.pop();
    document.getElementById("pop").textContent = week.join(', ');

    // Use the push function to add two fruits to the array fruits print to the fruits paragraph
    let fruits = ["Apple", "Kiwi", "Mango"];
    fruits.push("Orange", "Banana");
    document.getElementById("fruits").textContent = fruits.join(', ');

    // Use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits.unshift("Strawberry");
    document.getElementById("fruits2").textContent = fruits.join(', ');

    // Sort the array languages and print to the paragraph sorted
    // Reverse the array languages and print to the paragraph reversed
    let languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"];
    document.getElementById("sorted").textContent = languages.sort().join(', ');
    document.getElementById("reversed").textContent = languages.reverse().join(', ');

    // Use the compare function to sort the numbers and print to the num-sorted paragraph
    let numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    document.getElementById("num-sorted").textContent = numbers.sort((a, b) => a - b).join(', ');
}