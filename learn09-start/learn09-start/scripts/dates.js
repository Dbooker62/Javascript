/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const basicDate = new Date();
document.getElementById("basic").innerHTML = basicDate;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const today = new Date();
document.getElementById("today").innerHTML = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const birthday = new Date("1990-01-01"); // Change to your birthday
document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const isoDate = basicDate.toISOString();
document.getElementById("iso").innerHTML = isoDate;

// Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
document.getElementById("date1").innerHTML = new Date("October 13, 2024 11:13:00");
document.getElementById("date2").innerHTML = new Date(2024, 9, 13, 11, 13, 0);
document.getElementById("date3").innerHTML = new Date(1665648780000);

// getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = new Date().getFullYear();
document.getElementById("get2").innerHTML = new Date().getMonth() + 1;
document.getElementById("get3").innerHTML = new Date().getDate();
document.getElementById("get4").innerHTML = new Date().getDay();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const setDate = new Date();
setDate.setFullYear(2030);
document.getElementById("set1").innerHTML = setDate;

const setMonth = new Date();
setMonth.setMonth(11); // December
document.getElementById("set2").innerHTML = setMonth;

const setDateDay = new Date();
setDateDay.setDate(15);
document.getElementById("set3").innerHTML = setDateDay;

const setHours = new Date();
setHours.setHours(22);
document.getElementById("set4").innerHTML = setHours;