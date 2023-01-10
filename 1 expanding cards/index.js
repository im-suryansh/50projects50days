let inactive =document.querySelectorAll('.panel');
console.log(inactive)
let active =document.getElementsByClassName('panel active')
console.log(active)

inactive.forEach(element => {
    element.addEventListener('click',()=>{
        activetopanel()
        if (element.className == "panel") {
            element.className = "panel active";
          } else  {
            element.className = "panel";
          }
    })
    
});

function activetopanel(){
    inactive.forEach((panel)=>{
        panel.classList.remove('active')
    })
}
// document.getElementsByClassName("panel").onclick = function() { expand() }; 
// function expand() {
//     console.log('ssss')
//     inactive.className ="panel active" 

// }