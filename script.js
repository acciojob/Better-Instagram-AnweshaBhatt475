let arr = ["div1", "div2", "div3", "div4", "div5", "div6"]; //id name for div tag which class name is image
let divs = document.querySelectorAll(".image");
let k = 0;
for (let imageSection of divs) {
  imageSection.id = arr[k++];

  imageSection.addEventListener("dragstart", (e) => {
    let div = e.target;
    div.style.opacity = "0.5";
    e.dataTransfer.setData("text", div.id);
  });

  imageSection.addEventListener("dragend", (e) => {
    let div = e.target;
    div.style.opacity = "1";
  });

  //dragover , dragenter , drop
}

let eventArr = ["dragover", "dragenter", "drop"];

for (let dragevents of eventArr) {
  for (let imgsection of divs) {
    imgsection.addEventListener(dragevents, (e) => {
      e.preventDefault();
      if (dragevents === "drop") {
        let drag1 = e.dataTransfer.getData("text");
        let drag1Element = document.getElementById(drag1);
        let drag2 = imgsection.id;

        // Swap the background images
        let tempBg = drag1Element.style.backgroundImage;
        drag1Element.style.backgroundImage = imgsection.style.backgroundImage;
        imgsection.style.backgroundImage = tempBg;

        // Update the IDs
        drag1Element.id = drag2;
        imgsection.id = drag1;
      }
    });
  }
}
