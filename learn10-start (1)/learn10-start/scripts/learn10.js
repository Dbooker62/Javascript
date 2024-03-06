function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    document.getElementById('round').innerText = `Round 4.7: ${Math.round(4.7)}`;
    document.getElementById('ceil').innerText = `Ceil 4.4: ${Math.ceil(4.4)}`;
    document.getElementById('floor').innerText = `Floor 4.7: ${Math.floor(4.7)}`;
    document.getElementById('trunc').innerText = `Trunc -4.2: ${Math.trunc(-4.2)}`;
    document.getElementById('sign').innerText = `Sign -4: ${Math.sign(-4)}`;
    document.getElementById('pow').innerText = `Pow 8^2: ${Math.pow(8, 2)}`;
    document.getElementById('min').innerText = `Min (0, 150, 30, 20, -8, -200): ${Math.min(0, 150, 30, 20, -8, -200)}`;
    document.getElementById('random').innerText = `Random: ${Math.random()}`;


    // Random: https://www.w3schools.com/js/js_random.asp
    document.getElementById('random2').innerText = `Random Integer(1 - 100): ${Math.floor(Math.random() * 100) + 1}`;


    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // Read the reference

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    const num = 42; // A number
    const str = "42"; // A string

    // Comparing using == (loose equality, type is ignored)
    const looseComparison = num == str; // true, because "42" is converted to a number 42
    document.getElementById('comparisons').innerText = `Comparing == : ${looseComparison} (true, type is ignored)`;

    // Comparing using === (strict equality, type is considered)
    const strictComparison = num === str; // false, because the types are different
    document.getElementById('comparisons').innerText += `\nComparing === : ${strictComparison} (false, type is considered)`;

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}