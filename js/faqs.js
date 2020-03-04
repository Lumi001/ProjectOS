var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var sign = this.firstElementChild;
    if (content.style.display === "block") {
      content.style.display = "none";
      sign.className = "fas fa-plus";
    } else {
      content.style.display = "block";
      sign.className = "fas fa-minus";
    }
  });
}
