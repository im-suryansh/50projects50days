let boxes=document.querySelectorAll(".box")
window.addEventListener('keydown',checkKey)
function checkKey(event){

if (event.key=='a'||event.key=='A') {
   new Audio("./sounds/clap.wav").play()
   boxes[0].classList.add("boxpressed")
   setTimeout(normal, 200);

}
if (event.key=='s'||event.key=='S') {
   new Audio("./sounds/hihat.wav").play()
   boxes[1].classList.add("boxpressed")
   setTimeout(normal, 200);

        
}
if (event.key=='d'||event.key=='D') {
   new Audio("./sounds/kick.wav").play()
   boxes[2].classList.add("boxpressed")
   setTimeout(normal, 200);
    
}
if (event.key=='f'||event.key=='F') {
   new Audio("./sounds/openhat.wav").play()
   boxes[3].classList.add("boxpressed")
   setTimeout(normal, 200);
   
    
}
if (event.key=='g'||event.key=='G') {
   new Audio("./sounds/boom.wav").play()
   boxes[4].classList.add("boxpressed")
   setTimeout(normal, 200);

    
}
if (event.key=='h'||event.key=='H') {
   new Audio("./sounds/ride.wav").play()
   boxes[5].classList.add("boxpressed")
   setTimeout(normal, 200);

    
}
if (event.key=='j'||event.key=='J') {
   new Audio("./sounds/snare.wav").play()
   boxes[6].classList.add("boxpressed")
   setTimeout(normal, 200);

    
}
if (event.key=='k'||event.key=='K') {
   new Audio("./sounds/tom.wav").play()
   boxes[7].classList.add("boxpressed")
   setTimeout(normal, 200);

    
}
if (event.key=='l'||event.key=='L') {
   new Audio("./sounds/tink.wav").play()
   boxes[8].classList.add("boxpressed")
   setTimeout(normal, 200);

    
}

}
   



boxes[0].addEventListener("click", function() {
   boxes[0].classList.add("boxpressed");
   new Audio("./sounds/clap.wav").play();
      setTimeout(normal, 200);

});
boxes[1].addEventListener("click", function() {
   boxes[1].classList.add("boxpressed");
   new Audio("./sounds/hihat.wav").play();
      setTimeout(normal, 200);

});
boxes[2].addEventListener("click", function() {
   boxes[2].classList.add("boxpressed");
   new Audio("./sounds/kick.wav").play();
      setTimeout(normal, 200);

});
boxes[3].addEventListener("click", function() {
   boxes[3].classList.add("boxpressed");
   new Audio("./sounds/openhat.wav").play();
      setTimeout(normal, 200);

});
boxes[4].addEventListener("click", function() {
   boxes[4].classList.add("boxpressed");
   new Audio("./sounds/boom.wav").play();
      setTimeout(normal, 200);

});
boxes[5].addEventListener("click", function() {
   boxes[5].classList.add("boxpressed");
   new Audio("./sounds/ride.wav").play();
      setTimeout(normal, 200);

});
boxes[6].addEventListener("click", function() {
   boxes[6].classList.add("boxpressed");
   new Audio("./sounds/snare.wav").play();
      setTimeout(normal, 200);

});
boxes[7].addEventListener("click", function() {
   boxes[7].classList.add("boxpressed");
   new Audio("./sounds/tom.wav").play();
      setTimeout(normal, 200);

});
boxes[8].addEventListener("click", function() {
   boxes[8].classList.add("boxpressed");
   new Audio("./sounds/tink.wav").play();
      setTimeout(normal, 200);

});

function normal(){
   
   boxes.forEach(element => {
   element.classList.remove("boxpressed")
    
   });
}