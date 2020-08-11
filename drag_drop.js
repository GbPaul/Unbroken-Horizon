//Drag and drop:
//At dragstart, copy the dragged text
document.addEventListener("dragstart", function(event) {
	event.dataTransfer.setData("Text", event.target.id);
});
//when dragged item enters dropzone, change border to dotted 
document.addEventListener("dragenter", function(event) {
  if ( event.target.className == "order" ) {
    event.target.style.border = "6px dotted black";
  }
});
//prevent default
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});
//When draggeditem leaves dropzone, reset border style
document.addEventListener("dragleave", function(event) {
  if ( event.target.className == "order" ) {
    event.target.style.border = "";
  }
});
//When dropped on dropzone, send dragged text to addtoorders();
document.addEventListener("drop", function(event) {
  event.preventDefault();
  if ( event.target.className == "order" ) {
	event.target.style.border = "";
	var data = event.dataTransfer.getData("Text");
    var element = document.getElementById(data).textContent;
    addtoorders(element);
  }
});
