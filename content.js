// function generateCoinKey(startId, position) {
//     return `coin-${startId}+${position}`;
// }

// function getCurrentPageNumber() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get('from_1') || '0'; // Default to page 1 if no page parameter is found
// }

// // Save the coin data
// function saveCoinData(pageNumber, position, stanIndex, amount) {
//     const coinKey = generateCoinKey(pageNumber, position);
//     const storedData = JSON.parse(localStorage.getItem('coinData')) || {};
//     if (!storedData[coinKey]) {
//         storedData[coinKey] = {};
//     }
//     storedData[coinKey][stanIndex] = amount;
//     localStorage.setItem('coinData', JSON.stringify(storedData));
// }

// // Load the coin data
// function loadCoinData(pageNumber, position, stanIndex) {
//     const coinKey = generateCoinKey(pageNumber, position);
//     const storedData = JSON.parse(localStorage.getItem('coinData')) || {};
//     return storedData[coinKey] ? storedData[coinKey][stanIndex] : '';
// }

// // Function to add input fields and calculate values
// function addCoinFields() {
// // Create a style element
// const style = document.createElement('style');

// // Add the CSS rules you want to apply
// style.textContent = `
//   .main {
//       overflow-x: auto; /* Allows horizontal scrolling */
//       width: 100%; /* Full width of the parent container */
//   }
// `;




// // Append the style element to the document head
// document.head.appendChild(style);

//     const coinEntries = document.querySelectorAll('.table.search-results.table.table-bordered.table-hover.table-striped.table-condensed tbody tr'); // Adjust the selector to match the website
//     console.log("coinEntries", coinEntries);

//     coinEntries.forEach((entry, index) => {

//         var rowEntries = entry.querySelector('div');
//         console.log("row entries", rowEntries);

//         var positionID = 0;
//         var rowEntries2 = null;
//         if (rowEntries) {
//             rowEntries2 = rowEntries.querySelector('div');
//             positionID = positionID + 1;
//         }
//         else {
//             return;
//         }
//         console.log("row entries2", rowEntries2);

//         var rowEntries3 = null;
//         if (rowEntries2) {
//             rowEntries3 = rowEntries2.querySelectorAll('.row')[1];
//         }
//         console.log("row entries3", rowEntries3);

//         var coinWorthData = null;
//         if (rowEntries3) {
//             coinWorthData = rowEntries3.querySelectorAll('div')[3];
//         }
//         console.log("row entries4", coinWorthData);

//         // var beforeCoinWorthData = rowEntries3.querySelectorAll('div')[2];

//         // beforeCoinWorthData.after(coinWorthData);

//         var priceTableRows = null;
//         if (coinWorthData) {
//             priceTableRows = coinWorthData.querySelector('table tbody');
//         }
//         console.log("row entries5", priceTableRows);

//         if (priceTableRows) {

//         const inputRow = document.createElement('tr');
//         const sumRow = document.createElement('tr');

//         const headersRow = priceTableRows.querySelectorAll('tr')[0];
//         // Assuming the first row (tr) contains headers and the second row contains prices
//         const priceRow = priceTableRows.querySelectorAll('tr')[1];
        
//         console.log("price row", priceRow)

//         // Get all the price cells in this row
//         const priceCells = priceRow.querySelectorAll('td');

//         // Add input fields for each Stan (price state)
//         priceCells.forEach((cell, stateIndex) => {

//             console.log("cell",cell);

//             // Only add input fields if this is a price cell (check if it contains a price)
//             if (cell.innerText.trim() !== '') {
//                 const inputCell = document.createElement('td');
//                 const input = document.createElement('input');
//                 input.type = 'number';
//                 input.min = '0';
//                 input.placeholder = 'Qty';
//                 input.classList.add('coin-quantity-input');

//                 // Load stored quantity if available
//                 chrome.storage.sync.get([`coin_${index}_state_${stateIndex}`], (result) => {
//                     input.value = result[`coin_${index}_state_${stateIndex}`] || 0;
//                 });

//                 inputCell.appendChild(input);
//                 inputRow.appendChild(inputCell);

//                 // Create sum cell
//                 const sumCell = document.createElement('td');
//                 sumRow.appendChild(sumCell);

//                 // Handle input change
//                 input.addEventListener('input', () => {
//                     const quantity = parseInt(input.value) || 0;
//                     const price = parseFloat(cell.innerText);

//                     const total = quantity * price;

//                     // Store the quantity
//                     //chrome.storage.sync.set({ [`coin_${index}_state_${stateIndex}`]: quantity });
//                     saveCoinData(pageNumber, position, i, event.target.value);

//                     // Display the calculated value
//                     sumCell.innerText = `Łącznie: ${total.toFixed(2)}`;
//                 });

//                 priceRow.after(inputRow);
//                 inputRow.after(sumRow);
//             }
//         });
//     }
//     });
// }

// // Run the function on page load
// window.addEventListener('load', addCoinFields);

// function generateCoinKey(startId, position) {
//     return `coin-${startId}+${position}`;
// }

function getCurrentPageNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = Number(urlParams.get('from_1')) || '0';
    return pageParam // Default to page 1 if no page parameter is found
}

// Save the coin data
function saveCoinData(id, stanIndex, amount) {
    const storedData = JSON.parse(localStorage.getItem('coinData')) || {};
    if (!storedData[id]) {
        storedData[id] = {};
    }
    storedData[id][stanIndex] = amount;
    console.log("saveData", storedData)
    localStorage.setItem('coinData', JSON.stringify(storedData));
}

// Save the coin data
function saveCoinData(id, stanIndex, amount, total) {
    const storedData = JSON.parse(localStorage.getItem('coinData')) || {};
    if (!storedData[id]) {
        storedData[id] = {};
    }
    storedData[id][stanIndex] = [amount, total];
    console.log("saveData", storedData)
    localStorage.setItem('coinData', JSON.stringify(storedData));
}

// Load the coin data
function loadCoinData(id, stanIndex) {
    const storedData = JSON.parse(localStorage.getItem('coinData')) || {};
    console.log("storedData[id]",storedData[id]);
    console.log("storedData[id][stanIndex]",storedData[id][stanIndex]);

    if (storedData[id]) {
        if (storedData[id][storedData]) {
            if (storedData[id][storedData][0]) {
                return storedData[id][storedData][0];
            }
        }
    }
    
    return storedData[id] ? storedData[id][stanIndex][0] : '';
}


// Execute the functions when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    addCoinFields();
});

// Function to add input fields and calculate values
function addCoinFields() {
// Create a style element
const style = document.createElement('style');

// Add the CSS rules you want to apply
style.textContent = `
  .main {
      overflow-x: auto; /* Allows horizontal scrolling */
      width: 100%; /* Full width of the parent container */
  }
`;




// Append the style element to the document head
document.head.appendChild(style);

    const coinEntries = document.querySelectorAll('.table.search-results.table.table-bordered.table-hover.table-striped.table-condensed tbody tr'); // Adjust the selector to match the website
    console.log("coinEntries", coinEntries);

    const pageNumber = Number(getCurrentPageNumber()) * 5;
    console.log("getCurrentPageNumber", pageNumber)

    coinEntries.forEach((entry, index) => {

        var rowEntries = entry.querySelector('div');
        console.log("row entries", rowEntries);

        var rowEntries2 = null;
        if (rowEntries) {
            rowEntries2 = rowEntries.querySelector('div');
        }
        else {
            return;
        }
        console.log("row entries2", rowEntries2);

        var rowEntries3 = null;
        if (rowEntries2) {
            rowEntries3 = rowEntries2.querySelectorAll('.row')[1];
        }
        console.log("row entries3", rowEntries3);

        var coinWorthData = null;
        if (rowEntries3) {
            coinWorthData = rowEntries3.querySelectorAll('div')[3];
        }
        console.log("row entries4", coinWorthData);

        var priceTableRows = null;
        if (coinWorthData) {
            priceTableRows = coinWorthData.querySelector('table tbody');
        }
        console.log("row entries5", priceTableRows);

        if (priceTableRows) {

        const inputRow = document.createElement('tr');
        const sumRow = document.createElement('tr');

        const headersRow = priceTableRows.querySelectorAll('tr')[0];
        // Assuming the first row (tr) contains headers and the second row contains prices
        const priceRow = priceTableRows.querySelectorAll('tr')[1];
        
        console.log("price row", priceRow)

        // Get all the price cells in this row
        const priceCells = priceRow.querySelectorAll('td');

        const position = index + pageNumber; // The position of the coin on the current page
        console.log("position", position);

        // Add input fields for each Stan (price state)
        priceCells.forEach((cell, stateIndex) => {

            console.log("cell",cell);

            // Only add input fields if this is a price cell (check if it contains a price)
            if (cell.innerText.trim() !== '') {
                const inputCell = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '0';
                input.placeholder = 'Qty';
                input.classList.add('coin-quantity-input');

                // Load stored quantity if available
                input.value = loadCoinData(position, stateIndex);


                inputCell.appendChild(input);
                inputRow.appendChild(inputCell);

                // Create sum cell
                const sumCell = document.createElement('td');
                sumRow.appendChild(sumCell);

                // Handle input change
                input.addEventListener('input', (event) => {
                    const quantity = parseInt(input.value) || 0;
                    const price = parseFloat(cell.innerText);

                    const total = quantity * price;

                    // Store the quantity
                    //chrome.storage.sync.set({ [`coin_${index}_state_${stateIndex}`]: quantity });
                    saveCoinData(position, stateIndex, event.target.value, total);

                    // Display the calculated value
                    sumCell.innerText = `Łącznie: ${total.toFixed(2)}`;
                });

                priceRow.after(inputRow);
                inputRow.after(sumRow);

            }
        });
    }
    });
}

// Run the function on page load
window.addEventListener('load', addCoinFields);