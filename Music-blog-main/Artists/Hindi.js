
    function myFunction() {
      var x = document.getElementById("myHeader");
      if (x.className === "header") {
        x.className += " drop";
      } else {
        x.className = "header";
      }
    }
    