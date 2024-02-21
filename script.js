document.getElementById("clickMeButton").addEventListener("click", function() {
  var imageStack = document.getElementById("imageStack");
  imageStack.classList.toggle("hidden"); // Show the imageStack

  var clickMeButton = document.getElementById("clickMeButton");
  clickMeButton.style.display = 'none'; // Hide the button
});
