function showOrHide() {
  let [nav] = document.getElementsByTagName("nav");
  let numOfClass = nav.classList;
  if (numOfClass < 1) {
    nav.classList.add("active");
    return;
  }
  nav.classList.remove("active");
}
