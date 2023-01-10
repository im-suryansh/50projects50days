document.querySelector(".conatiner")
document.querySelector(".open").addEventListener("click",function(){
    // console.log("clisked")
    // document.body.style.transition = "all 2s";
    // document.body.style.transform="rotate(-20deg)"; 
    // document.body.style.transformOrigin = 'top left';
    document.querySelector(".circle").classList.add("rotated");
    document.querySelector(".written").classList.add("writtenrotated");
    document.querySelector(".navhide").classList.add("navshow");

})


document.querySelector(".close").addEventListener("click",function(){
    console.log("clisked")
    
    // document.body.style.transform="rotate(0deg)"; 
    // document.body.style.transformOrigin = 'top left';
    document.querySelector(".circle").classList.remove("rotated");
    document.querySelector(".written").classList.remove("writtenrotated");
    document.querySelector(".navhide").classList.remove("navshow");


})

