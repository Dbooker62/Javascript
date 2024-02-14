document.addEventListener('DOMContentLoaded', function () {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthsContainer = document.getElementById('months-container');
    const holidaysDisplay = document.getElementById('holidays-display');

    months.forEach(month => {
        let button = document.createElement('button');
        button.textContent = month;
        button.addEventListener('click', () => displayHolidays(month));
        monthsContainer.appendChild(button);
    });

    function displayHolidays(month) {
        let holidays;
        switch (month) {
            case "January":
                holidays = "New Years Day, Martin Luther King Day";
                break;
            case "February":
                holidays = "Presidents' Day, Valentine's Day";
                break;
            // Add cases for each month
            case "March":
                holidays = "St. Patrick's Day, March Equinox";
                break;
            case "April":
                holidays = "Easter, April Fool's Day";
                break;
            case "May":
                holidays = "Cinco de Mayo, Memorial Day";
                break;
            case "June":
                holidays = "Father's Day, Juneteenth";
                break;
            case "July":
                holidays = "Independence Day, International Friendship Day";
                break;
            case "August":
                holidays = "International Day of the World's Indigenous Peoples, National Relaxation Day";
                break;
            case "September":
                holidays = "Labor Day, Autumn Equinox";
                break;
            case "October":
                holidays = "Halloween, Columbus Day";
                break;
            case "November":
                holidays = "Veterans Day, Thanksgiving";
                break;
            case "December":
                holidays = "Christmas Day, New Year's Eve";
                break;
            default:
                holidays = "No holidays listed.";
                break;
        }
        holidaysDisplay.textContent = `Holidays in ${month}: ${holidays}`;
    }
});


