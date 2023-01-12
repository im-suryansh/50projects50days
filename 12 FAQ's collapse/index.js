var box = document.querySelector(".box");
let button = document.querySelectorAll(".down");
button.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.parentNode.classList.toggle("active");
    // document.querySelector('.bigbox').style.display="flex"
  });
});
