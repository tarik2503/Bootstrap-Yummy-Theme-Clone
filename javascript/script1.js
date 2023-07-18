$(document).ready(function(){
    var one = $("#one-carousel");
    var two = $("#two-carousel");
    var three = $("three-carousel");
    one.owlCarousel(
        {
            margin:10,
            loop:true,
            items:1,
            autoplay:true,
        }
    );
    two.owlCarousel(
        {
            
            margin:0,
            loop:true,
            items:1,
            autoHeight:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true
                }
            }
            
        }
        
    );
    three.owlCarousel(
        {
            margin:1,
            loop:true,
            items:5,
            autoplay:true,
        }
    );

   
  });
 




var displayDropdown = () =>{
    var element1 = document.querySelector(".dropdown-menu1");
    var element2 = document.querySelector(".dropdown-menu2");

    element1.style.display = "block";
    element2.style.display = "block";
}
function navigateAbout(){
    var element1 = document.getElementById("about-a");
    var element2 = document.getElementById("about-div");

    var element3 = document.getElementById("home-a");
    var element4 = document.getElementById("home-div");

    var element5 = document.getElementById("menu-a");
    var element6 = document.getElementById("menu-div");

    element3.classList.remove("active");
    element4.classList.remove("active");
    

    element1.classList.add("active");
    element2.classList.add("active");

    element5.classList.remove("active");
    element6.classList.remove("active");

    // element1.style.width = "100%";
    // element2.style.width = "100%";
}
function navigateHome(){
    var element1 = document.getElementById("about-a");
    var element2 = document.getElementById("about-div");

    var element3 = document.getElementById("home-a");
    var element4 = document.getElementById("home-div");

    var element5 = document.getElementById("menu-a");
    var element6 = document.getElementById("menu-div");

    element1.classList.remove("active");
    element2.classList.remove("active");

    element3.classList.add("active");
    element4.classList.add("active");

    element5.classList.remove("active");
    element6.classList.remove("active");

}
function navigateMenu(){
    var element1 = document.getElementById("about-a");
    var element2 = document.getElementById("about-div");

    var element3 = document.getElementById("home-a");
    var element4 = document.getElementById("home-div");

    var element5 = document.getElementById("menu-a");
    var element6 = document.getElementById("menu-div");

    element1.classList.remove("active");
    element2.classList.remove("active");

    element3.classList.remove("active");
    element4.classList.remove("active");

    element5.classList.add("active");
    element6.classList.add("active");

}



// --------------------------------
