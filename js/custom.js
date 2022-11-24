function SlideRight() {
    // Checks to see if the slider is to the left of the div
    if (document.getElementById("slider").style.float !== "right") {
      // If it is we will float the sliderBtn to the right and change the background of the housing to green
      document.getElementById("slider").style.float = "right";
      document.getElementById("slideHousing").style.backgroundColor = "#00ff00";
  
      // Toggle dark mode on
      document.body.style.backgroundColor = "#595959";
      document.getElementById("header").style.color = "#e6e6e6";
      document.getElementById("press").style.color = "#e6e6e6";
    } else {
      // If clicked again the btn will move back to the left side and change the color back to original
      document.getElementById("slider").style.float = "left";
      document.getElementById("slideHousing").style.backgroundColor = "#e6e6e6";
  
      // Toggle dark mode off
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.color = "#000";
      document.getElementById("press").style.color = "#000";
    }
  }