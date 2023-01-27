const choose = {
  check: function () {
    var i = 0;
    var c = 0
    currdiv=document.querySelectorAll(".added")
    
    textarea = document.querySelector("input");
    textarea.addEventListener("keydown", function (e) {
      if (e.key == ",") {
        i += 1;

        let text = textarea.value.split(",");
        currtext = "";

        if (text[i - 1] != "") {
          c+=1
          var div = document.createElement("div");
          
          div.classList.add(`"number${c}"`)
          div.classList.add("added");
          div.innerText = text[i - 1];
          document.getElementById("main").appendChild(div);
         
        }
      } else {
        var currtext = textarea.value.split(",").pop();
        if (currtext == "" && textarea.value.length == 0) {
          var div = document.createElement("div");
          div.classList.add("added");
          
          document.getElementById("main").appendChild(div);
          
        } else if (currtext!=0) {
            
            console.log(currtext);
        
        }


      }
    });
  },

};

choose.check();
