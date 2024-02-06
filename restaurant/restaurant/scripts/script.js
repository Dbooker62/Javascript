function calculateOrder() {
    // Customer name
    const customerName = document.getElementById('customerName').value;

    // Prices for each item
    const prices = {
        drinks: [2, 3, 2.5, 4, 6], // Prices for each drink
        sandwiches: [5, 6, 7, 6.5, 7.5], // Prices for each sandwich
        desserts: [4, 4.5, 5, 3.5, 2.5] // Prices for each dessert
    };

    // Function to calculate subtotal for each category
    const calculateSubtotal = (category, itemCount) => {
        let subtotal = 0;
        const pricesForCategory = prices[category]; // Fetch prices array for the given category
        for (let i = 0; i < itemCount; i++) {
            const inputId = `${category}${i + 1}`;
            const quantity = parseInt(document.getElementById(inputId)?.value || 0);
            if (!isNaN(quantity)) {
                subtotal += quantity * pricesForCategory[i]; // Access prices using the correct index
            } else {
                console.error(`Invalid input value for ${inputId}`);
            }
        }
        return subtotal;
    };

    // Calculate subtotals for each category
    const drinksSubtotal = calculateSubtotal('drinks', 5); // Corrected category name
    const sandwichesSubtotal = calculateSubtotal('sandwiches', 5); // Corrected category name
    const dessertsSubtotal = calculateSubtotal('desserts', 5); // Corrected category name

    // Calculate grand total
    const grandTotal = drinksSubtotal + sandwichesSubtotal + dessertsSubtotal;

    // Create order summary content
    let orderSummaryContent = `<h2>Order Summary for ${customerName}</h2>`;
    orderSummaryContent += `<p>Drinks Total: $${drinksSubtotal.toFixed(2)}</p>`;
    orderSummaryContent += `<p>Sandwiches Total: $${sandwichesSubtotal.toFixed(2)}</p>`;
    orderSummaryContent += `<p>Desserts Total: $${dessertsSubtotal.toFixed(2)}</p>`;
    orderSummaryContent += `<h3>Grand Total: $${grandTotal.toFixed(2)}</h3>`;

    // Display the order summary
    document.getElementById('orderSummary').innerHTML = orderSummaryContent;
}
