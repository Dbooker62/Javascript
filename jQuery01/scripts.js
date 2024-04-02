$(document).ready(function () {
    // Function to hide all paragraphs when the specific button is clicked
    $('#hideParagraphsButton').click(function () {
        $('p').hide();
    });

    // Function to hide the div with the id 'mainSection' when the specific button is clicked
    $('#hideMainButton').click(function () {
        $('#mainSection').hide();
    });

    // Function to hide h2 elements when they are clicked
    $('h2').click(function () {
        $(this).hide();
    });
});
