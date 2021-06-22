var animate_1 = document.querySelector(".box");
var animate_2 = document.querySelector(".box2");


animate_1.addEventListener("click", function(){
    animate_1.classList.add("animatebox");
   
    animate_2.classList.add("animate");
    setTimeout(() => {
        animate_2.classList.remove("box-2");
        
    }, 1000);


});

