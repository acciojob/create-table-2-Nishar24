function createTable() {
    // Prompt the user for the number of rows
    const rowInput = prompt("Input number of rows");
    // Prompt the user for the number of columns
    const colInput = prompt("Input number of columns");

    // Validate the inputs
    if (rowInput === null || colInput === null) {
        // User canceled the prompt, do nothing
        return;
    }

    // Convert inputs to numbers
    const numRows = parseInt(rowInput);
    const numCols = parseInt(colInput);

    // Validate if inputs are valid numbers and greater than 0
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        alert("Invalid input. Please enter positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    // Create the table rows and columns
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = document.createElement("tr");

        for (let j = 0; j < numCols; j++) {
            // Create a new cell
            const cell = document.createElement("td");
            // Set the cell content
            cell.textContent = `Row-${i} Column-${j}`;
            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", () => {
    const createTableButton = document.querySelector("button");
    createTableButton.addEventListener("click", createTable);
});