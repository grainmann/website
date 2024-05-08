// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all images in the gallery
var images = document.getElementsByClassName("gallery-img");
var modalImg = document.getElementById("img01");

// Loop through each image and add click event listener
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
