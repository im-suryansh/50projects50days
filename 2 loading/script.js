let next=document.getElementById("next");
next.addEventListener("click", inc);
let count=0;

prog=document.querySelectorAll(".circle");

let prev=document.getElementById("prev");

prev.addEventListener("click", previ);

function disable() {
    if (count>=1) {
        console.log(prog)
        document.getElementById('prev').disabled = false; 
    }
     else if( count == 0) {
        document.getElementById('prev').disabled = true; 
    }
}
function enable(){
    if (count <3) {
        document.getElementById('next').disabled = false; 
    }
    else{
        document.getElementById('next').disabled = true; 
    }
}
function inc() {
    count+=1
    disable()
    enable()
    calc()
    colorcircle()
    
}
function previ() {
    decolorcircle()
    count-=1
    enable()
    disable()
    calc()
    
   
}
function calc(){
    document.getElementById("activeline").style.width=(count/3)*100+"%"
}

function colorcircle(){
    console.log(prog[count])
    
    prog[count].classList.add("active")
}
function decolorcircle(){
    console.log(prog[count])
    
    prog[count].classList.remove("active")
}