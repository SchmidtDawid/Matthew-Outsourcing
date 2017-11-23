let mainNav = document.getElementById('main-nav');
let navSpacing = document.querySelector('.nav-spacing');
let contactButton = document.querySelector('.contact-notification');
let upButton = document.querySelector('.scroll-up-button');



window.addEventListener("scroll", function(e){
    if(window.pageYOffset > 78.17){
        mainNav.classList.add('fixed-top');
        mainNav.classList.add('fixed-prop');
        navSpacing.style.display = "block";
        contactButton.style.right = "-350px"
    }
    else{
        mainNav.classList.remove('fixed-top');
        mainNav.classList.remove('fixed-prop');
        navSpacing.style.display = "none";
        contactButton.style.right = "-406px"
    }

    if(window.pageYOffset > 800){
        upButton.style.right = "0px"
    }
    else{
        upButton.style.right = "-56px"
    }
})


$('.nav-item')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
