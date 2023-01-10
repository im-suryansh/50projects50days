document.querySelector(".search").addEventListener("click",function(){
    
    if (document.querySelector(".bar").classList.contains('baractive')) {
    document.querySelector(".bar").classList.remove("baractive")
        
    }
    else {
        document.querySelector(".bar").classList.add("baractive")
    }
})