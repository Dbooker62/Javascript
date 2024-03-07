function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);
    let zodiac = '';

    // Determine the Chinese Zodiac sign.
    switch (year % 12) {
        case 0:
            chi = "Monkey";
            break;
        case 1:
            chi = "Rooster";
            break;
        case 2:
            chi = "Dog";
            break;
        case 3:
            chi = "Pig";
            break;
        case 4:
            chi = "Rat";
            break;
        case 5:
            chi = "Ox";
            break;
        case 6:
            chi = "Tiger";
            break;
        case 7:
            chi = "Rabbit";
            break;
        case 8:
            chi = "Dragon";
            break;
        case 9:
            chi = "Snake";
            break;
        case 10:
            chi = "Horse";
            break;
        case 11:
            chi = "Sheep";
            break;
        default:
            chi = "Not in my list";
            break;
    }

    // Determine the Western Zodiac sign
    switch (month) {
        case 1: // January
            zodiac = (date < 20) ? "Capricorn" : "Aquarius";
            break;
        case 2: // February
            zodiac = (date < 19) ? "Aquarius" : "Pisces";
            break;
        case 3: // March
            zodiac = (date < 21) ? "Pisces" : "Aries";
            break;
        case 4: // April
            zodiac = (date < 20) ? "Aries" : "Taurus";
            break;
        case 5: // May
            zodiac = (date < 21) ? "Taurus" : "Gemini";
            break;
        case 6: // June
            zodiac = (date < 21) ? "Gemini" : "Cancer";
            break;
        case 7: // July
            zodiac = (date < 23) ? "Cancer" : "Leo";
            break;
        case 8: // August
            zodiac = (date < 23) ? "Leo" : "Virgo";
            break;
        case 9: // September
            zodiac = (date < 23) ? "Virgo" : "Libra";
            break;
        case 10: // October
            zodiac = (date < 23) ? "Libra" : "Scorpio";
            break;
        case 11: // November
            zodiac = (date < 22) ? "Scorpio" : "Sagittarius";
            break;
        case 12: // December
            zodiac = (date < 22) ? "Sagittarius" : "Capricorn";
            break;
        default:
            zodiac = "Not in my list";
            break;
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("zodiac").innerHTML = "Your Zodiac sign is: " + zodiac;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
}