document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll(".image");
  
  // Make each div draggable
  divs.forEach((div) => {
    div.addEventListener("dragstart", (e) => {
      // Set opacity during drag
      e.target.style.opacity = "0.5";
      e.dataTransfer.setData("text", e.target.id);  // Store the id of the dragged div
    });

    div.addEventListener("dragend", (e) => {
      e.target.style.opacity = "1";  // Restore opacity after drag ends
    });
    
    // Enable the divs to accept drops
    div.addEventListener("dragover", (e) => {
      e.preventDefault();  // Necessary to allow dropping
    });

    div.addEventListener("dragenter", (e) => {
      e.preventDefault();  // Necessary to allow dropping
      e.target.style.border = "5px solid #00c3ff";  // Highlight the drop target
    });

    div.addEventListener("dragleave", (e) => {
      e.target.style.border = "2px solid #ccc";  // Remove highlight when the dragged div leaves
    });

    div.addEventListener("drop", (e) => {
      e.preventDefault();
      const dragDivId = e.dataTransfer.getData("text");
      const draggedDiv = document.getElementById(dragDivId);
      const targetDiv = e.target;

      // Swap background images
      const draggedBg = draggedDiv.style.backgroundImage;
      const targetBg = targetDiv.style.backgroundImage;
      
      draggedDiv.style.backgroundImage = targetBg;
      targetDiv.style.backgroundImage = draggedBg;

      // Swap IDs to reflect the swapped positions
      const tempId = draggedDiv.id;
      draggedDiv.id = targetDiv.id;
      targetDiv.id = tempId;

      e.target.style.border = "2px solid #ccc";  // Remove the highlight
    });
  });
});
