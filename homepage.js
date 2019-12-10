// get the id named work
// add event addEventListener to work
// when mouseover, show div
// when mouseup, take out div

var content = document.getElementById("work");
content.addEventListener("mouseover", addContent);
content.addEventListener("mouseout", removeContent)

function addContent() {
  var div = document.createElement("div");
  div.classList.add("content");
  document.body.appendChild(div);
}

function removeContent() {
  content.classList.remove("content");
}

addContent();
removeContent();


// var title = document.getElementById("work")
//
// function addContent() {
//   title[i].classList.add("content");
//   title[i].addEventListener("mouseenter",
//   function (){
//   this.classList.add("div");
// });
// }
//
//   title[i].addEventListener("mouseleave",
//   function (){
//   this.classList.remove("div");
//   });
// }
