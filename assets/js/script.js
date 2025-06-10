function myNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.getElementById("slide-btn").addEventListener("click", function () {
  var content = document.getElementById("slide-contents");
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
});
