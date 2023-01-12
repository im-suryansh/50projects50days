let jokefn={
    fetchjoke:function() {
    fetch('https://icanhazdadjoke.com/slack')
    .then((response) => response.json())
    .then((data) => this.uploadjoke(data))
    },
    uploadjoke: function(data){
        const { text } =data.attachments[0];
      document.querySelector('.main').innerText=text;
      document.querySelector('.main').style=text;

        
    
}}
jokefn.fetchjoke()
document.querySelector(".btn").addEventListener('click',function(){
    jokefn.fetchjoke()

})