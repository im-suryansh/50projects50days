const display = document.querySelector(".output");
const textArea = document.querySelector(".input");
let randomNumber;
let arr;
let colored = false;

document.querySelector('.input').addEventListener("keydown", function(event) {
    colored = false;
    if(event.key == "Enter") {
        let min = 0;
        let max = arr.length-1;
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        textArea.value = "";
        display.children[randomNumber].classList.add("random");
        colored = true;
    }
    
    document.querySelector('.input').addEventListener("input", function() {
        if( !colored ) {
            arr = textArea.value.split(",");
            
            display.innerHTML = "";
            
            for(let i=0; i<arr.length; i++) {
                if( arr[i].trim() == "" ) continue; 
                display.innerHTML += `<div class="added" > ${ arr[i] }  </div>`;
            }
        }
    });

});




