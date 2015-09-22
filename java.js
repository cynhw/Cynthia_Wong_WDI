$(window).scroll(checkParallax);
		//This function is called every time the page is scrolled 
    //The effect is made moving the background position a little bit down every time is scrolled to make the parallax effect
    function checkParallax(){
        var scrolled = $(window).scrollTop();
        var sectionParallax = document.getElementById("parallax");
        //Change the x position of the background image
        if(scrolled < sectionParallax.getBoundingClientRect().top || (scrolled + sectionParallax.getBoundingClientRect().height) > sectionParallax.getBoundingClientRect().top ){          
            sectionParallax.style.backgroundPosition = '50% '+ (-1)*(scrolled*0.5)+'px';
        }
}