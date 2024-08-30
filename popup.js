document.addEventListener('DOMContentLoaded', function () {
    const storedData = JSON.parse(localStorage.getItem('coinData')) || {};


    var sumtotal = 0;
    // Iterate through each stored coin entry
    Object.keys(storedData).forEach(coinKey => {
        const coinData = storedData[coinKey];

        console.log("coinData", coinData)

        Object.keys(storedData).forEach(keyEntry => {
            const amount = parseFloat(keyEntry[1]) || 0; // Get the stored amount for this state
            console.log("storedData", storedData)
            totalValue += amount;  // Multiply by the corresponding price and add to total
        });

        
    });

    document.getElementById('totalValue').innerText = `Łączna wartość: ${sumtotal.toFixed(2)}`;
});

function calculateTotalValue() {

}