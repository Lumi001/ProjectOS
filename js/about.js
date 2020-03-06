var coll = document.getElementsByClassName("con");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mousedown", function() {
    this.classList.toggle("shadow");
    var content = this.nextElementSibling;
    console.log(content);
  });
}
