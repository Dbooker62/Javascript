$(document).ready(function () {
    // Handle form submission
    $("#submitBtn").click(function () {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var schoolName = $("#schoolName").val();
        var grade = $("#grade").val();
        var hobby = $("#hobby").val();


        $("#displayInfo").append("<p>Name: " + firstName + " " + lastName + "<br>School: " + schoolName + "<br>Grade: " + grade + "<br>Hobby: " + hobby + "</p>");


        $("#infoForm").trigger("reset");
    });

    // Change to light theme
    $("#lightTheme").click(function () {
        $("body, .form-container").css("background", "linear-gradient(to right, #f8cdda, #f3a9f5)");
        $("body").css("color", "black");
    });

    // Change to dark theme
    $("#darkTheme").click(function () {
        $("body, .form-container").css("background", "linear-gradient(to right, #000000, #434343)");
        $("body").css("color", "white");
    });

    // Increase font size
    var fontSize = 16;
    $("#increaseFont").click(function () {
        if (fontSize < 32) {
            fontSize++;
            $("body").css("font-size", fontSize + "px");
        }
    });

    // Decrease font size
    $("#decreaseFont").click(function () {
        if (fontSize > 10) {
            fontSize--;
            $("body").css("font-size", fontSize + "px");
        }
    });
});
