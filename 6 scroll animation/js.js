let boxes = document.querySelectorAll(".boxes");

window.addEventListener("scroll", fun);
function fun() {
  console.log("1");
  let call = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    let boxtop = box.getBoundingClientRect().top;
    if (call > boxtop) {
      box.classList.add("boxesdone");
    } else {
      box.classList.remove("boxesdone");
    }
  });
}
