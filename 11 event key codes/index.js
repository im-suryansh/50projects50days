let before=document.querySelector(".before")
let key=document.querySelector(".key")
let keyccode=document.querySelector(".keyCode")
let code=document.querySelector(".code")
let box=document.querySelector(".box")

window.addEventListener('keydown',function(event){
    before.style.display='none'
    box.style.display='flex'
    key.innerText=` ${event.key}`
    code.innerText=`${event.code}`
    keyccode.innerText=`${event.keyCode}`
})

    
