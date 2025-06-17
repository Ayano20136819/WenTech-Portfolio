document.getElementById("slide-btn").addEventListener("click", function () {
  var content = document.getElementById("slide-contents");
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
});
