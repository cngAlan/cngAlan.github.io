
function addRow() {
  // Get a reference to the table element
  var table = document.querySelector("#items_options table");

  // Get a reference to the first row in the table
  var firstRow = table.querySelector("tbody");

  // Clone the first row
  var newRow = firstRow.cloneNode(true);

  // Insert the cloned row into the table
  table.appendChild(newRow);
}
