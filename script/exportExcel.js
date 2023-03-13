function exportToExcel() {
    /* Get table data */
    var table = document.getElementById("myTable");
    var tableData = [];
  
    /* Loop through table rows */
    for (var i = 0, row; row = table.rows[i]; i++) {
      var rowData = [];
  
      /* Loop through row cells */
      for (var j = 0, cell; cell = row.cells[j]; j++) {
        rowData.push(cell.innerText);
      }
  
      /* Add row data to table data array */
      tableData.push(rowData);
    }
  
    /* Create workbook and worksheet */
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.aoa_to_sheet(tableData);
  
    /* Add worksheet to workbook */
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    /* Save workbook */
    var filename = "exported_table.xlsx";
    XLSX.writeFile(workbook, filename);
  }

function saveAsPDF() {
    alert();
    // Get the HTML content to convert
    const htmlContent = document.documentElement.outerHTML;
  
    // Create a new PDF document
    const pdfDoc = new jsPDF("p", "mm", "a4");
  
    // Convert HTML content to PDF format
    pdfDoc.html(htmlContent, {
      callback: function () {
        // Save the PDF file
        pdfDoc.save("document.pdf");
      },
      x: 10,
      y: 10,
    });
  }