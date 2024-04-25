const close = document.getElementById("close");
const body = document.getElementById("body");
close.addEventListener("click", () => {
  const navbar = document.getElementById("navbar");
  const sites = document.getElementById("sites");
  var status = getComputedStyle(sites).getPropertyValue("--status");
  if (status === "open") {
    navbar.style.height = "5%";
    sites.style.display = "none";
    sites.style.setProperty("--status", "close");
    body.style.height = "95%";
  } else {
    navbar.style.height = "15%";
    sites.style.display = "flex";
    sites.style.setProperty("--status", "open");
    body.style.height = "85%";
  }
});

function toggle() {
  let portfolio_image_img = document.getElementById("image");
  let value = document.getElementById("image").value;
  portfolio_image_img.addEventListener("click", console.log("hello"));
}
