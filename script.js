document.getElementById("logo").addEventListener("click", hideHeader);

function hideHeader() {
  let logo = document.getElementById("logo");
  let header = document.getElementById("header");
  var elements = header.children;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id !== "logo") {
      if (elements[i].style.display === "none") {
        elements[i].style.display = "";
        header.style.backgroundColor = "";
        header.style.boxShadow = "";
        header.style.padding = "";
        logo.style.backgroundColor = "";
        logo.style.padding = "";
        logo.style.width = "";
        logo.style.cursor = "";
        logo.style.borderRadius = "";
      } else {
        elements[i].style.display = "none";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        header.style.padding = "0";
        logo.style.backgroundColor = "rgb(31, 31, 31, 0.7)";
        logo.style.padding = "0px";
        logo.style.width = "100%";
        logo.style.cursor = "pointer";
        logo.style.borderRadius = "0";
      }
    }
  }
}
