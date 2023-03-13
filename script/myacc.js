function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  // Click on the "Jeans" link on page load to open the accordion for demo purposes
  document.getElementById("myBtn").click();
  
  
  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  function convertToInches() {
    let millimeters = document.getElementById("millimeters").value;
    let inches = millimeters / 25.4;
    document.getElementById("inches").value = inches.toFixed(2);
  }

  function convertToMillimeters() {
    let inches = document.getElementById("inches").value;
    let millimeters = inches * 25.4;
    document.getElementById("millimeters").value = millimeters.toFixed(2);
  }