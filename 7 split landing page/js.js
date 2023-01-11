// const left = document.querySelector(".left")
// const right = document.querySelector(".right")
// const container=document.querySelector(".container")

// right.addEventListener('mouseenter',()=>{
//     console.log("hehe")
//     left.classList.add('.lefthover')
    
// })
document.querySelector(".right").addEventListener("mouseover", function() {
    console.log("yes");
    document.querySelector(".left").classList.add("right-hover");
});
document.querySelector(".right").addEventListener("mouseout", function() {
    document.querySelector(".left").classList.remove("right-hover")
});

document.querySelector(".left").addEventListener("mouseover", function() {
    console.log("yes");
    document.querySelector(".right").classList.add("left-hover");
});
document.querySelector(".left").addEventListener("mouseout", function() {
    document.querySelector(".right").classList.remove("left-hover")
});