const navbarNav = document.querySelectorAll(".navbar-nav");
document.getElementById("hamburger-menu").addEventListener("click", () => {
  navbarNav.forEach((element) => {
    element.classList.toggle("active");
    // if (element.style.display === "block") {
    //   element.style.display = "none";
    // } else {
    //   element.style.display = "block";
    // }
  });
});
