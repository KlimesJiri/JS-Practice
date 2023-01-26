const slides = document.querySelectorAll(".slide");

slides.forEach(function(oneslide){
    oneslide.addEventListener("click", function(){
        removeActiveClass();
        oneslide.classList.add("active");
    })
});

function removeActiveClass(){
    slides.forEach(function(mySlide){
        mySlide.classList.remove("active");
    })
};

