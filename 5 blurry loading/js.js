// document.querySelector(".container")

var time = document.getElementsByClassName("timer");

let i = 100;

function Timeout() {
  if (i > 0) {
    i--;
    let calc = i / 10;
    console.log(i);
    document.querySelector(".container").style.filter = "blur(" + calc + "px)";
    document.querySelector(".text").innerText = 100-i + "%";
    document.querySelector(".text").style.opacity = i/100 ;

  }
}
var myInterval = setInterval(Timeout, 20);
